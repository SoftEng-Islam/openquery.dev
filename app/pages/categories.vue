<template>
	<div class="space-y-12">
		<!-- Header -->
		<section class="mb-12 border-b border-zinc-800 pb-12">
			<NuxtLink to="/blog" class="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors mb-6">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
				Back to Blog
			</NuxtLink>
			<h1 class="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
				All Categories
			</h1>
			<p class="text-xl text-zinc-300 leading-relaxed max-w-2xl">
				Browse articles by topic.
			</p>
		</section>

		<!-- Categories Grid -->
		<section>
			<div v-if="categoryStats && categoryStats.length > 0" class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<NuxtLink
					v-for="stat in categoryStats"
					:key="stat.name"
					:to="`/blog?category=${encodeURIComponent(stat.name)}`"
					class="group rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col justify-between"
				>
					<h3 class="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
						{{ stat.name }}
					</h3>
					<span class="text-sm text-zinc-400 bg-zinc-800/50 self-start px-2.5 py-0.5 rounded-md group-hover:text-zinc-300 transition-colors">
						{{ stat.count }} article{{ stat.count !== 1 ? 's' : '' }}
					</span>
				</NuxtLink>
			</div>
			<p v-else class="text-zinc-400">
				No categories found.
			</p>
		</section>
	</div>
</template>

<script setup lang="ts">
const { data: categoryStats } = await useAsyncData("all-categories-stats", async () => {
	const allPages = await queryCollection("content").all();

	const posts = allPages
		.filter((page: any) => page.path.startsWith("/blog/"))
		.map((page: any) => page.category || "Uncategorized");

	const counts: Record<string, number> = {};
	for (const cat of posts) {
		if (cat === "Uncategorized") continue;
		counts[cat] = (counts[cat] || 0) + 1;
	}

	return Object.entries(counts)
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
});

useSeoMeta({
	title: "All Categories • OpenQuery",
	description: "Browse all blog categories on OpenQuery.",
});
</script>
