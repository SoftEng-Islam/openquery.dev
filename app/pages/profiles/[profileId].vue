<script setup lang="ts">
const profileId = useRoute().params.profileId;
definePageMeta({
	layout: "profiles",
});
</script>

<template>
	<h1>
		Hello {{ profileId }}
	</h1>
</template>
