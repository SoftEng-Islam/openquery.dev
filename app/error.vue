<template>
	<div>
		<h1 class="mb-6 text-6xl font-black px-3 py-2 rounded-md bg-red-300 text-red-500 text-shadow-2xs">
			{{ props.error.message }} - Error {{ props.error.status }}
		</h1>
		<div class="bg-gray-700 rounded-md p-5">
			<pre class="overflow-y-scroll">{{ props.error.stack }}</pre>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
</script>
