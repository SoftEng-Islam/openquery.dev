<script setup lang="ts">
// Add structured data for better search engine understanding
useHead({
	meta: [
		{
			name: "author",
			content: "Islam Ahmed",
		},
		{
			name: "twitter:creator",
			content: "@SoftEng_Islam",
		},
		{
			property: "og:site_name",
			content: "OpenQuery",
		},
		{
			property: "og:type",
			content: "website",
		},
	],
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
