<template>
	<div
		class="text-3xl font-black"
		:class="props.colorClass"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
interface PageTitleProperties {
	colorClass?: string;
}
const props = withDefaults(defineProps<PageTitleProperties>(), {
	colorClass: "text-red-500",
});
</script>
