<template>
	<div class="space-y-12">
		<!-- Header -->
		<section class="mb-12 border-b border-zinc-800 pb-12">
			<p class="text-sm uppercase tracking-[0.2em] font-semibold text-emerald-400 mb-4">
				Blog
			</p>
			<h1 class="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
				Articles & Tutorials
			</h1>
			<p class="text-xl text-zinc-300 leading-relaxed max-w-2xl">
				Explore my latest thoughts, technical tutorials, and insights on web development and design.
			</p>
		</section>

		<!-- Categories -->
		<section
			v-if="categories.length > 0"
			class="mb-8"
		>
			<div class="flex flex-wrap items-center gap-2">
				<button
					:class="[
						'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border',
						activeCategory === 'All'
							? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
							: 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300',
					]"
					@click="setCategory('All')"
				>
					All
				</button>
				<button
					v-for="category in displayedCategories"
					:key="category"
					:class="[
						'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border',
						activeCategory === category
							? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50'
							: 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300',
					]"
					@click="setCategory(category)"
				>
					{{ category }}
				</button>

				<NuxtLink
					to="/categories"
					class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border border-transparent text-emerald-400 hover:bg-emerald-500/10"
				>
					View all categories →
				</NuxtLink>
			</div>
		</section>

		<!-- Posts Grid -->
		<section>
			<div
				v-if="pagedPosts && pagedPosts.length > 0"
				class="grid gap-6 md:grid-cols-2"
			>
				<article
					v-for="post in pagedPosts"
					:key="post.path"
					class="group rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col"
				>
					<!-- Date and Metadata -->
					<div class="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-4">
						<template v-if="post.categories && post.categories.length > 0 && post.categories[0] !== 'Uncategorized'">
							<span
								v-for="cat in post.categories"
								:key="cat"
								class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 capitalize"
							>
								{{ cat }}
							</span>
						</template>
						<time :datetime="post.date">
							{{ formatDate(post.date) }}
						</time>
						<span class="text-zinc-600">·</span>
						<span>{{ estimateReadTime(post.description) }}</span>
					</div>

					<!-- Title -->
					<h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
						{{ post.title }}
					</h3>

					<!-- Description -->
					<p class="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3 flex-grow">
						{{ post.description }}
					</p>

					<!-- Read More Link -->
					<NuxtLink
						:to="post.path"
						class="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors mt-auto"
					>
						<span>Read article</span>
						<svg
							class="w-4 h-4 group-hover:translate-x-1 transition-transform"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</NuxtLink>
				</article>
			</div>

			<p
				v-else
				class="rounded-xl border-2 border-dashed border-zinc-800 p-8 text-center text-zinc-400"
			>
				No posts found in this category.
			</p>

			<!-- Pagination -->
			<nav
				v-if="totalPages > 1"
				ref="paginationRef"
				class="mt-12 flex items-center justify-center gap-1"
				aria-label="Blog pagination"
			>
				<!-- Prev -->
				<button
					:disabled="currentPage === 1"
					class="pagination-btn pagination-btn--arrow"
					aria-label="Previous page"
					@click="goToPage(currentPage - 1)"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<!-- Page numbers -->
				<template v-for="item in pageItems" :key="item">
					<span v-if="item === '...'" class="px-2 text-zinc-500 select-none">…</span>
					<button
						v-else
						:aria-label="`Page ${item}`"
						:aria-current="currentPage === item ? 'page' : undefined"
						class="pagination-btn"
						:class="{ 'pagination-btn--active': currentPage === item }"
						@click="goToPage(item as number)"
					>
						{{ item }}
					</button>
				</template>

				<!-- Next -->
				<button
					:disabled="currentPage === totalPages"
					class="pagination-btn pagination-btn--arrow"
					aria-label="Next page"
					@click="goToPage(currentPage + 1)"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</nav>

			<!-- Page info -->
			<p v-if="totalPages > 1" class="mt-4 text-center text-sm text-zinc-500">
				Page {{ currentPage }} of {{ totalPages }} · {{ filteredPosts.length }} articles
			</p>
		</section>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();

// ── Category filter ──────────────────────────────────────────────────────────
const activeCategory = ref(
  route.query.category ? String(route.query.category) : "All",
);

watch(
  () => route.query.category,
  (newCategory) => {
    activeCategory.value = newCategory ? String(newCategory) : "All";
  },
);

const setCategory = (category: string) => {
  activeCategory.value = category;
  // Reset to page 1 and update URL
  router.push({
    query: {
      ...(category !== "All" ? { category } : {}),
    },
  });
  currentPage.value = 1;
};

// ── Data ─────────────────────────────────────────────────────────────────────
const { data: posts } = await useAsyncData("blog-posts-all", async () => {
  const allPages = await queryCollection("content").all();

  return allPages
    .filter((page: any) => page.path.startsWith("/blog/"))
    .sort(
      (a: any, b: any) =>
        new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
    )
    .map((page: any) => {
      let defaultCategory = "Uncategorized";
      const segments = page.path.split("/").filter(Boolean);
      if (segments.length >= 2 && segments[0] === "blog") {
        defaultCategory =
          segments[1].charAt(0).toUpperCase() + segments[1].slice(1);
      }

      const categories = normalizeCategories(page.category);
      if (categories.length === 0) {
        categories.push(defaultCategory);
      }

      return {
        title: page.title || "Untitled post",
        description: page.description || "A new entry from the blog.",
        path: page.path,
        date: page.date,
        categories: categories,
      };
    });
});

// ── Derived ──────────────────────────────────────────────────────────────────
const categories = computed(() => {
  if (!posts.value) return [];
  const cats = new Set(
    posts.value
      .flatMap((post) => post.categories)
      .filter((c) => c !== "Uncategorized"),
  );
  return Array.from(cats).sort();
});

const displayedCategories = computed(() => categories.value.slice(0, 4));

const filteredPosts = computed(() => {
  if (!posts.value) return [];
  if (activeCategory.value === "All") return posts.value;
  return posts.value.filter((post) =>
    post.categories.includes(activeCategory.value),
  );
});

// ── Pagination ───────────────────────────────────────────────────────────────
const PAGE_SIZE = 6;
const paginationRef = ref<HTMLElement | null>(null);

const currentPage = ref(
  route.query.page ? Math.max(1, Number(route.query.page)) : 1,
);

// Keep currentPage in sync when the URL `page` param changes externally
watch(
  () => route.query.page,
  (p) => {
    currentPage.value = p ? Math.max(1, Number(p)) : 1;
  },
);

// Reset to page 1 whenever the filter changes
watch(filteredPosts, () => {
  currentPage.value = 1;
});

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredPosts.value.length / PAGE_SIZE)),
);

const pagedPosts = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return filteredPosts.value.slice(start, start + PAGE_SIZE);
});

/** Builds the page number list with "..." ellipsis for large page counts */
const pageItems = computed<(number | "...")[]>(() => {
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const items: (number | "...")[] = [1];

  if (current > 3) items.push("...");

  const rangeStart = Math.max(2, current - 1);
  const rangeEnd = Math.min(total - 1, current + 1);

  for (let i = rangeStart; i <= rangeEnd; i++) items.push(i);

  if (current < total - 2) items.push("...");

  items.push(total);
  return items;
});

function goToPage(page: number) {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;

  // Sync URL
  router.push({
    query: {
      ...(activeCategory.value !== "All"
        ? { category: activeCategory.value }
        : {}),
      ...(page > 1 ? { page: String(page) } : {}),
    },
  });

  // Scroll the grid back into view
  nextTick(() => {
    paginationRef.value?.closest("section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(value?: string | number | Date) {
  if (!value) {
    return "Recently published";
  }

  return new Date(value).toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function estimateReadTime(text?: string) {
  if (!text) return "3 min read";
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

useSeoMeta({
  title: "Blog • OpenQuery",
  description:
    "Explore the latest web development tutorials, guides, and thoughts by Islam Ahmed.",
  ogTitle: "Blog • OpenQuery",
  ogDescription:
    "Explore the latest web development tutorials, guides, and thoughts by Islam Ahmed.",
  twitterTitle: "Blog • OpenQuery",
  twitterDescription:
    "Explore the latest web development tutorials, guides, and thoughts by Islam Ahmed.",
});
</script>

<style scoped>
.pagination-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgb(39 39 42); /* zinc-800 */
  background: rgb(24 24 27 / 0.4);
  color: rgb(161 161 170); /* zinc-400 */
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.15s,
    border-color 0.15s,
    color 0.15s;
}
.pagination-btn:hover:not(:disabled) {
  background: rgb(39 39 42); /* zinc-800 */
  border-color: rgb(63 63 70); /* zinc-700 */
  color: #fff;
}
.pagination-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.pagination-btn--active {
  background: rgb(16 185 129 / 0.15); /* emerald-500/15 */
  border-color: rgb(16 185 129 / 0.5); /* emerald-500/50 */
  color: rgb(52 211 153); /* emerald-400 */
}
.pagination-btn--arrow {
  color: rgb(113 113 122); /* zinc-500 */
}
</style>

