<template>
	<section class="mx-auto max-w-3xl rounded-3xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-sm">
		<p class="text-sm uppercase tracking-[0.35em] text-emerald-400">
			About this blog
		</p>
		<h1 class="mt-3 text-3xl font-semibold text-white sm:text-4xl">
			I’m building a calm corner of the web for ideas, learnings, and thoughtful notes.
		</h1>
		<p class="mt-4 text-lg text-zinc-300">
			This site is a simple, fast personal blog powered by Nuxt and Markdown. It is meant for sharing what I learn, what I build, and what I keep thinking about.
		</p>
		<p class="mt-4 text-zinc-400">
			The structure is intentionally minimal so writing stays easy and publishing stays frictionless.
		</p>
	</section>
</template>

<script setup lang="ts">
useHead({
	title: "About • OpenQuery",
	meta: [
		{
			name: "description",
			content: "About the personal blog and its purpose.",
		},
	],
});
</script>
