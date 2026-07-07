<template>
	<section class="space-y-6">
		<div class="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-sm">
			<p class="text-sm uppercase tracking-[0.35em] text-emerald-400">
				Personal blog
			</p>
			<h1 class="mt-3 text-4xl font-semibold text-white sm:text-5xl">
				I write about code, ideas, and the quiet craft of building things.
			</h1>
			<p class="mt-4 max-w-2xl text-lg text-zinc-300">
				This space is now shaped as a simple publishing home for notes, tutorials, and reflections.
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<NuxtLink
					to="/about"
					class="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-emerald-400"
				>
					About me
				</NuxtLink>
			</div>
		</div>

		<div>
			<div class="mb-4 flex items-center justify-between">
				<h2 class="text-2xl font-semibold text-white">
					Latest posts
				</h2>
				<span class="text-sm text-zinc-400">
					{{ posts.length }} article{{ posts.length === 1 ? "" : "s" }}
				</span>
			</div>

			<div
				v-if="posts.length"
				class="grid gap-4 md:grid-cols-2"
			>
				<article
					v-for="post in posts"
					:key="post.path"
					class="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition hover:border-emerald-500/60"
				>
					<p class="text-sm text-emerald-400">
						{{ formatDate(post.date) }}
					</p>
					<h3 class="mt-2 text-xl font-semibold text-white">
						{{ post.title }}
					</h3>
					<p class="mt-3 text-sm text-zinc-400">
						{{ post.description }}
					</p>
					<NuxtLink
						:to="post.path"
						class="mt-4 inline-flex text-sm font-medium text-emerald-400"
					>
						Read article →
					</NuxtLink>
				</article>
			</div>

			<p
				v-else
				class="rounded-2xl border border-dashed border-zinc-700 p-6 text-zinc-400"
			>
				No posts yet. Add a Markdown file inside the content/posts folder to publish your first article.
			</p>
		</div>
	</section>
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

useHead({
	title: "OpenQuery — personal blog",
	meta: [
		{
			name: "description",
			content: "A personal blog built with Nuxt and Nuxt Content.",
		},
	],
});
</script>
