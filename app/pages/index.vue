<template>
	<div class="space-y-12">
		<!-- Hero Section -->
		<section class="mb-12">
			<p class="text-sm uppercase tracking-[0.2em] font-semibold text-emerald-400 mb-4">
				Welcome to my blog
			</p>
			<h1 class="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
				I write about code, ideas, and the craft of building things.
			</h1>
			<p class="text-xl text-zinc-300 leading-relaxed max-w-2xl mb-8">
				This space is a home for tutorials, reflections, and notes on web development, creative thinking, and the journey of building in public.
			</p>
			<div class="flex flex-wrap gap-3">
				<NuxtLink
					to="/about"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
				>
					<span>Learn about me</span>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</NuxtLink>
				<a
					href="#latest-posts"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium transition-colors border border-zinc-800"
				>
					<span>Read articles</span>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</a>
			</div>
		</section>

		<!-- Posts Section -->
		<section id="latest-posts" class="scroll-mt-20">
			<div class="mb-8">
				<div class="flex items-baseline justify-between mb-2">
					<h2 class="text-3xl font-bold text-white">
						Latest articles
					</h2>
					<span class="text-sm text-zinc-500">
						{{ posts?.length }} article{{ posts?.length === 1 ? "" : "s" }}
					</span>
				</div>
				<div class="h-1 w-16 bg-linear-to-r from-emerald-500 to-transparent rounded-full"></div>
			</div>

			<div
				v-if="posts"
				class="grid gap-6 md:grid-cols-2"
			>
				<article
					v-for="post in posts"
					:key="post.path"
					class="group rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
				>
					<!-- Date and Metadata -->
					<div class="flex items-center gap-3 text-xs text-zinc-400 mb-4">
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
					<p class="text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
						{{ post.description }}
					</p>

					<!-- Read More Link -->
					<NuxtLink
						:to="post.path"
						class="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors"
					>
						<span>Read article</span>
						<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</NuxtLink>
				</article>
			</div>

			<p
				v-else
				class="rounded-xl border-2 border-dashed border-zinc-800 p-8 text-center text-zinc-400"
			>
				No posts yet. Add a Markdown file inside the content/posts folder to publish your first article.
			</p>
		</section>
	</div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-posts", async () => {
	const allPages = await queryCollection("content").all();

	return allPages
		.filter((page: any) => page.path.startsWith("/posts/"))
		.sort((a: any, b: any) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
		.map((page: any) => ({
			title: page.title || "Untitled post",
			description: page.description || "A new entry from the blog.",
			path: page.path,
			date: page.date,
		}));
});

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

useHead({
	title: "OpenQuery — Web Development Blog by Islam Ahmed (@SoftEng)",
	meta: [
		{
			name: "description",
			content: "Web development tutorials, guides, and insights from Islam Ahmed (@SoftEng). Learn about code, design, and creative development.",
		},
		{
			name: "keywords",
			content: "web development, tutorials, guides, code, design, JavaScript, web design",
		},
		{
			name: "author",
			content: "Islam Ahmed",
		},
		{
			property: "og:title",
			content: "OpenQuery — Web Development Blog by Islam Ahmed",
		},
		{
			property: "og:description",
			content: "Tutorials, guides, and insights on web development from Islam Ahmed (@SoftEng)",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "twitter:card",
			content: "summary_large_image",
		},
		{
			property: "twitter:creator",
			content: "@SoftEng_Islam",
		},
	],
});
</script>
