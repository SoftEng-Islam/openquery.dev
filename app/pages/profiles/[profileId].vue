<script setup lang="ts">
const profileId = useRoute().params.profileId;
</script>

<template>
	<h1>
		Hello {{ profileId }}
	</h1>
</template>
