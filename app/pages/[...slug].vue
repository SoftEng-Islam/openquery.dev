<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
	return queryCollection("content").path(route.path).first();
});

if (!page.value) {
	throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

// Calculate reading time (rough estimate: 200 words per minute)
const readingTime = computed(() => {
	if (!page.value?.body?.children) return "5 min read";

	const wordCount = page.value.body.children
		.reduce((acc: number, node: any) => {
			if (node.type === 'text') return acc + node.value?.split(/\s+/).length || 0;
			if (node.children) return acc + node.children.reduce((childAcc: number, child: any) => {
				return childAcc + (child.value?.split(/\s+/).length || 0);
			}, 0);
			return acc;
		}, 0);

	const minutes = Math.max(1, Math.round(wordCount / 200));
	return `${minutes} min read`;
});

useHead({
	title: page.value?.title ? `${page.value.title} • OpenQuery` : "OpenQuery",
	meta: [
		{
			name: "description",
			content: page.value?.description || "A personal blog built with Nuxt and Nuxt Content.",
		},
		{
			name: "author",
			content: page.value?.author || "Islam Ahmed",
		},
		{
			property: "og:type",
			content: "article",
		},
		{
			property: "og:title",
			content: page.value?.title || "OpenQuery",
		},
		{
			property: "og:description",
			content: page.value?.description || "A web development blog",
		},
		{
			property: "article:author",
			content: page.value?.author || "Islam Ahmed",
		},
		{
			property: "article:published_time",
			content: page.value?.date?.toISOString() || new Date().toISOString(),
		},
	],
});

function formatDate(value?: string | number | Date) {
	if (!value) {
		return "Recently published";
	}

	return new Date(value).toLocaleDateString("en", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
}
</script>

<template>
	<article class="max-w-3xl">
		<!-- Article Header -->
		<header class="mb-8 pb-8 border-b border-zinc-800">
			<!-- Meta Info -->
			<div class="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
				<time :datetime="page?.date">
					{{ formatDate(page?.date) }}
				</time>
				<span class="text-zinc-600">·</span>
				<span>{{ readingTime }}</span>
				<template v-if="page?.author">
					<span class="text-zinc-600">·</span>
					<span>{{ page.author }}</span>
				</template>
			</div>

			<!-- Title -->
			<h1 class="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
				{{ page?.title }}
			</h1>

			<!-- Description/Subtitle -->
			<p
				v-if="page?.description"
				class="text-xl text-zinc-300 leading-relaxed"
			>
				{{ page.description }}
			</p>
		</header>

		<!-- Article Content -->
		<div class="prose prose-invert max-w-none mb-12">
			<ContentRenderer
				v-if="page"
				:value="page"
				class="prose-headings:text-white prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-emerald-300 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-l-emerald-500 prose-blockquote:text-zinc-300 prose-blockquote:italic prose-ul:text-zinc-300 prose-ol:text-zinc-300 prose-li:mb-2"
			/>
		</div>

		<!-- Article Footer -->
		<footer class="pt-8 border-t border-zinc-800">
			<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
				<!-- Author Info -->
				<div v-if="page?.author" class="flex items-center gap-4">
					<div class="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
						<span class="text-white font-semibold text-sm">
							{{ page.author.charAt(0).toUpperCase() }}
						</span>
					</div>
					<div>
						<div class="text-white font-medium">{{ page.author }}</div>
						<div class="text-sm text-zinc-400">Article author</div>
					</div>
				</div>

				<!-- Share/Back Actions -->
				<div class="flex items-center gap-3">
					<NuxtLink
						to="/"
						class="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors text-sm font-medium"
					>
						← Back to posts
					</NuxtLink>
				</div>
			</div>
		</footer>
	</article>
</template>
