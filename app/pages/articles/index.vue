<script setup lang="ts">
const { data: articles } = await useAsyncData("articles", () =>
	queryCollection("content")
		.where("path", "LIKE", "/articles/%")
		.where("draft", "=", false)
		.order("date", "DESC")
		.all(),
);

useSeoMeta({
	title: "Articles",
	description: "Articles and notes from OpenQuery.",
});
</script>

<template>
	<main>
		<h1>Articles</h1>
		<ul>
			<li
				v-for="article in articles"
				:key="article.path"
			>
				<NuxtLink :to="article.path">
					<h2>{{ article.title }}</h2>
				</NuxtLink>
				<p>{{ article.description }}</p>
				<time
					v-if="article.date"
					:datetime="new Date(article.date).toISOString()"
				>
					{{ new Date(article.date).toLocaleDateString('en', { dateStyle: 'long' }) }}
				</time>
			</li>
		</ul>
	</main>
</template>
