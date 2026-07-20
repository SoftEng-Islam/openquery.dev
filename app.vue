<script setup lang="ts">
const i18nHead = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: "id",
	addSeoAttributes: true,
});

useHead(() => ({
	htmlAttrs: {
		lang: i18nHead.value.htmlAttrs!.lang,
		dir: i18nHead.value.htmlAttrs!.dir,
	},
	meta: [
		{
			name: "author",
			content: "Islam Ahmed",
		},
		...(i18nHead.value.meta || []),
	],
	link: i18nHead.value.link || [],
}));

useSeoMeta({
	twitterCreator: "@SoftEng_Islam",
	ogSiteName: "OpenQuery",
	ogType: "website",
});

// Add JSON-LD structured data
useSchemaOrg([
	defineWebsite({
		name: "OpenQuery",
		description: "Web development insights, tutorials, and thoughts from Islam Ahmed (@SoftEng)",
		url: "https://openquery.dev",
		author: {
			"@type": "Person",
			name: "Islam Ahmed",
			url: "https://openquery.dev",
			sameAs: [
				"https://github.com/SoftEng-Islam",
				"https://x.com/SoftEng_Islam",
			],
		},
	}),
	definePerson({
		name: "Islam Ahmed",
		url: "https://openquery.dev/about",
		image: "https://openquery.dev/author-avatar.png",
		sameAs: [
			"https://github.com/SoftEng-Islam",
			"https://x.com/SoftEng_Islam",
		],
		jobTitle: "Web Developer",
		description: "Web developer and digital creator exploring the intersection of code and design.",
	}),
]);
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
