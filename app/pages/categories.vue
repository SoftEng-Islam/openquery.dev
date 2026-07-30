<template>
	<div>
		<!-- Page Header -->
		<section class="mb-10 pb-10 border-b border-zinc-800/60">
			<p class="text-sm uppercase tracking-[0.2em] font-semibold text-emerald-400 mb-3">
				Browse Topics
			</p>
			<h1 class="text-5xl sm:text-6xl font-bold text-white leading-tight mb-3">
				Categories
			</h1>
			<p class="text-lg text-zinc-400 leading-relaxed max-w-2xl">
				{{ totalLessons }} lessons across {{ groupedByCategory?.length ?? 0 }} topics.
			</p>
		</section>

		<!-- No categories fallback -->
		<div v-if="!groupedByCategory || groupedByCategory.length === 0" class="text-zinc-500 text-center py-16">
			No categories found yet.
		</div>

		<!-- Topics Grid -->
		<div
			v-else
			class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			<NuxtLink
				v-for="group in groupedByCategory"
				:key="group.category"
				:to="`/blog?category=${encodeURIComponent(group.category)}`"
				class="group flex flex-col rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
			>
				<!-- Color banner -->
				<div
					class="h-24 w-full relative overflow-hidden flex-shrink-0"
					:style="{ background: getCategoryGradient(group.category) }"
				>
					<!-- Decorative blobs -->
					<div class="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 blur-2xl"></div>
					<div class="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-black/20 blur-xl"></div>
					<!-- Big watermark letter -->
					<span class="absolute inset-0 flex items-center justify-end pr-5 text-8xl font-black text-white/10 select-none leading-none">
						{{ group.category.charAt(0).toUpperCase() }}
					</span>
					<!-- Lesson count badge -->
					<div class="absolute top-3 left-4 flex items-center gap-1.5">
						<span class="text-xs font-bold text-white/90 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
							{{ group.posts.length }} lesson{{ group.posts.length !== 1 ? 's' : '' }}
						</span>
					</div>
				</div>

				<!-- Card body -->
				<div class="p-4 flex flex-col flex-grow">
					<!-- Topic name -->
					<h2 class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors mb-3 capitalize">
						{{ group.category }}
					</h2>

					<!-- Recent lesson titles preview -->
					<ul class="space-y-1.5 flex-grow">
						<li
							v-for="post in group.posts.slice(0, 3)"
							:key="post.path"
							class="flex items-start gap-2 text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors"
						>
							<span class="flex-shrink-0 mt-0.5 w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-600 transition-colors"></span>
							<span class="line-clamp-1">{{ post.title }}</span>
						</li>
						<li v-if="group.posts.length > 3" class="text-xs text-zinc-600 pl-3">
							+{{ group.posts.length - 3 }} more…
						</li>
					</ul>

					<!-- Footer -->
					<div class="flex items-center justify-between mt-4 pt-3 border-t border-zinc-800/60">
						<span class="text-xs text-zinc-600">Browse topic</span>
						<svg
							class="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all duration-200"
							fill="none" stroke="currentColor" viewBox="0 0 24 24"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
const { data: groupedByCategory } = await useAsyncData("categories-playlist", async () => {
	const allPages = await queryCollection("content").all();

	const posts = allPages
		.filter((page: any) => page.path.startsWith("/blog/"))
		.sort((a: any, b: any) => {
			const numA = parseInt((a.path || '').split('/').pop() || '0');
			const numB = parseInt((b.path || '').split('/').pop() || '0');
			if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
			return new Date(a.date || 0).getTime() - new Date(b.date || 0).getTime();
		})
		.map((page: any) => ({
			title: page.title || "Untitled",
			description: page.description || "",
			path: page.path,
			date: page.date,
			category: page.category || "Uncategorized",
		}));

	const grouped: Record<string, any[]> = {};
	for (const post of posts) {
		if (post.category === "Uncategorized") continue;
		if (!grouped[post.category]) grouped[post.category] = [];
		grouped[post.category].push(post);
	}

	return Object.entries(grouped)
		.map(([category, posts]) => ({ category, posts }))
		.sort((a, b) => b.posts.length - a.posts.length || a.category.localeCompare(b.category));
});

const totalLessons = computed(() =>
	groupedByCategory.value?.reduce((sum, g) => sum + g.posts.length, 0) ?? 0
);

function getCategoryGradient(name: string): string {
	const palettes = [
		"linear-gradient(135deg, #10b981, #059669)",
		"linear-gradient(135deg, #6366f1, #4f46e5)",
		"linear-gradient(135deg, #f59e0b, #d97706)",
		"linear-gradient(135deg, #ec4899, #db2777)",
		"linear-gradient(135deg, #3b82f6, #2563eb)",
		"linear-gradient(135deg, #8b5cf6, #7c3aed)",
		"linear-gradient(135deg, #14b8a6, #0d9488)",
		"linear-gradient(135deg, #f97316, #ea580c)",
		"linear-gradient(135deg, #84cc16, #65a30d)",
		"linear-gradient(135deg, #ef4444, #dc2626)",
	];
	let hash = 0;
	for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) % palettes.length;
	return palettes[Math.abs(hash) % palettes.length];
}

useSeoMeta({
	title: "Categories • OpenQuery",
	description: "Browse all topics and lessons on OpenQuery.",
});
</script>
