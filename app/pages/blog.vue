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
				v-if="limitedPosts && limitedPosts.length > 0"
				class="grid gap-6 md:grid-cols-2"
			>
				<article
					v-for="post in limitedPosts"
					:key="post.path"
					class="group rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col"
				>
					<!-- Date and Metadata -->
					<div class="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mb-4">
						<span
							v-if="post.category && post.category !== 'Uncategorized'"
							class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
						>
							{{ post.category }}
						</span>
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

			<div v-if="hasMorePosts" class="mt-12 text-center">
				<button
					@click="loadMore"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium transition-colors border border-zinc-800"
				>
					Load more posts
				</button>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const activeCategory = ref(route.query.category ? String(route.query.category) : "All");

watch(() => route.query.category, (newCategory) => {
	activeCategory.value = newCategory ? String(newCategory) : "All";
});

const setCategory = (category: string) => {
	activeCategory.value = category;
	router.push({ query: category === 'All' ? undefined : { category } });
	postLimit.value = 6;
};

const { data: posts } = await useAsyncData("blog-posts-all", async () => {
	const allPages = await queryCollection("content").all();

	return allPages
		.filter((page: any) => page.path.startsWith("/blog/"))
		.sort((a: any, b: any) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
		.map((page: any) => ({
			title: page.title || "Untitled post",
			description: page.description || "A new entry from the blog.",
			path: page.path,
			date: page.date,
			category: page.category || "Uncategorized",
		}));
});

const categories = computed(() => {
	if (!posts.value) return [];
	const cats = new Set(posts.value.map(post => post.category).filter(c => c !== "Uncategorized"));
	return Array.from(cats).sort();
});

const displayedCategories = computed(() => categories.value.slice(0, 4));

const filteredPosts = computed(() => {
	if (!posts.value) return [];
	if (activeCategory.value === "All") return posts.value;
	return posts.value.filter(post => post.category === activeCategory.value);
});

const postLimit = ref(6);
const limitedPosts = computed(() => filteredPosts.value.slice(0, postLimit.value));
const hasMorePosts = computed(() => filteredPosts.value.length > postLimit.value);

const loadMore = () => {
	postLimit.value += 6;
};

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
	description: "Explore the latest web development tutorials, guides, and thoughts by Islam Ahmed.",
	ogTitle: "Blog • OpenQuery",
	ogDescription: "Explore the latest web development tutorials, guides, and thoughts by Islam Ahmed.",
	twitterTitle: "Blog • OpenQuery",
	twitterDescription: "Explore the latest web development tutorials, guides, and thoughts by Islam Ahmed.",
});
</script>
