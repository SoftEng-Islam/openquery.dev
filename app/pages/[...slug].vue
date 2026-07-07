<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
	return queryCollection("content").path(route.path).first();
});

if (!page.value) {
	throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

useHead({
	title: page.value?.title ? `${page.value.title} • OpenQuery` : "OpenQuery",
	meta: [
		{
			name: "description",
			content: page.value?.description || "A personal blog built with Nuxt and Nuxt Content.",
		},
	],
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
</script>

<template>
	<article class="mx-auto max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-sm">
		<p class="text-sm text-emerald-400">
			{{ formatDate(page?.date) }}
		</p>
		<h1 class="mt-2 text-3xl font-semibold text-white sm:text-4xl">
			{{ page?.title }}
		</h1>
		<p
			v-if="page?.description"
			class="mt-4 text-lg text-zinc-300"
		>
			{{ page.description }}
		</p>
		<div class="prose prose-invert mt-8 max-w-none">
			<ContentRenderer
				v-if="page"
				:value="page"
			/>
		</div>
	</article>
</template>
