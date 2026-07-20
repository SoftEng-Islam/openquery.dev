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

		<!-- Posts Sections by Category -->
		<div v-if="groupedPosts && groupedPosts.length > 0" class="space-y-16 scroll-mt-20" id="latest-posts">
			<section
				v-for="group in groupedPosts"
				:key="group.category"
				class="scroll-mt-20"
			>
				<div class="mb-8">
					<div class="flex items-baseline justify-between mb-2">
						<h2 class="text-3xl font-bold text-white">
							{{ group.category }}
						</h2>
						<NuxtLink :to="`/blog?category=${encodeURIComponent(group.category)}`" class="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
							View all →
						</NuxtLink>
					</div>
					<div class="h-1 w-16 bg-linear-to-r from-emerald-500 to-transparent rounded-full"></div>
				</div>

				<div class="grid gap-6 md:grid-cols-2">
					<article
						v-for="post in group.posts"
						:key="post.path"
						class="group rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/60 p-6 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
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
			</section>
			
			<div class="mt-8 text-center">
				<NuxtLink
					to="/blog"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium transition-colors border border-zinc-800"
				>
					<span>Browse all articles</span>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</NuxtLink>
			</div>
		</div>

		<p
			v-else
			class="rounded-xl border-2 border-dashed border-zinc-800 p-8 text-center text-zinc-400"
		>
			No posts yet. Add a Markdown file inside the content/blog folder to publish your first article.
		</p>

		<!-- Connect Section -->
		<section id="connect" class="scroll-mt-20">
			<div class="mb-8">
				<h2 class="text-3xl font-bold text-white mb-2">
					Let's connect
				</h2>
				<div class="h-1 w-16 bg-linear-to-r from-emerald-500 to-transparent rounded-full mb-6"></div>
				<p class="text-zinc-400 max-w-2xl">
					I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Find me across the web.
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<!-- GitHub Card -->
				<a
					href="https://github.com/SoftEng-Islam"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-500 hover:bg-zinc-900/80 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/50"
				>
					<div class="absolute inset-0 bg-linear-to-br from-zinc-800/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
					<div class="relative z-10 flex flex-col h-full justify-between">
						<div class="mb-4 flex items-center justify-between">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
								<Icon name="simple-icons:github" class="h-6 w-6" />
							</div>
							<Icon name="ph:arrow-up-right-bold" class="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-white" />
						</div>
						<div>
							<h3 class="text-lg font-bold text-white mb-1">GitHub</h3>
							<p class="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">@SoftEng-Islam</p>
						</div>
					</div>
				</a>

				<!-- X (Twitter) Card -->
				<a
					href="https://x.com/SoftEng_Islam"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-500 hover:bg-zinc-900/80 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/50"
				>
					<div class="absolute inset-0 bg-linear-to-br from-zinc-800/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
					<div class="relative z-10 flex flex-col h-full justify-between">
						<div class="mb-4 flex items-center justify-between">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#1DA1F2] group-hover:text-white">
								<Icon name="simple-icons:x" class="h-5 w-5" />
							</div>
							<Icon name="ph:arrow-up-right-bold" class="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-white" />
						</div>
						<div>
							<h3 class="text-lg font-bold text-white mb-1">X (Twitter)</h3>
							<p class="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">@SoftEng_Islam</p>
						</div>
					</div>
				</a>

				<!-- Email / Contact Card -->
				<a
					href="mailto:hello@openquery.dev"
					class="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-500 hover:bg-zinc-900/80 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10"
				>
					<div class="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
					<div class="relative z-10 flex flex-col h-full justify-between">
						<div class="mb-4 flex items-center justify-between">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white">
								<Icon name="ph:envelope-simple-bold" class="h-6 w-6" />
							</div>
							<Icon name="ph:arrow-right-bold" class="h-5 w-5 text-zinc-500 transition-colors duration-300 group-hover:text-emerald-400" />
						</div>
						<div>
							<h3 class="text-lg font-bold text-white mb-1">Email Me</h3>
							<p class="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">Let's talk</p>
						</div>
					</div>
				</a>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const { data: groupedPosts } = await useAsyncData("grouped-blog-posts", async () => {
	const allPages = await queryCollection("content").all();

	const posts = allPages
		.filter((page: any) => page.path.startsWith("/blog/"))
		.sort((a: any, b: any) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
		.map((page: any) => ({
			title: page.title || "Untitled post",
			description: page.description || "A new entry from the blog.",
			path: page.path,
			date: page.date,
			category: page.category || "Uncategorized",
		}));

	const limit = 4; // Show up to 4 posts per category on the home page
	const grouped: Record<string, any[]> = {};

	for (const post of posts) {
		if (!grouped[post.category]) {
			grouped[post.category] = [];
		}
		if (grouped[post.category].length < limit) {
			grouped[post.category].push(post);
		}
	}

	return Object.entries(grouped)
		.map(([category, categoryPosts]) => ({ category, posts: categoryPosts }))
		.sort((a, b) => a.category.localeCompare(b.category));
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

useSeoMeta({
	title: "OpenQuery — Web Development Blog by Islam Ahmed (@SoftEng)",
	description: "Web development tutorials, guides, and insights from Islam Ahmed (@SoftEng). Learn about code, design, and creative development.",
	ogTitle: "OpenQuery — Web Development Blog by Islam Ahmed",
	ogDescription: "Tutorials, guides, and insights on web development from Islam Ahmed (@SoftEng)",
	ogType: "website",
	twitterCard: "summary_large_image",
	twitterCreator: "@SoftEng_Islam",
	twitterTitle: "OpenQuery — Web Development Blog by Islam Ahmed",
	twitterDescription: "Tutorials, guides, and insights on web development from Islam Ahmed (@SoftEng)",
});

useHead({
	meta: [
		{
			name: "keywords",
			content: "web development, tutorials, guides, code, design, JavaScript, web design",
		},
		{
			name: "author",
			content: "Islam Ahmed",
		},
	],
});
</script>
