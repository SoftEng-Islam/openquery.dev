<template>
	<div>
		<h1 class="text-red-500">
			Hello Word
		</h1>
		<NuxtLink to="/about">About</NuxtLink>
		<br>
		{{ count }}
		<br>
		<button
			class="px-2 py-1 rounded-md bg-green-400"
			@click="count++"
		>
			Click
		</button>
		<ul>
			<li
				v-for="value in data?.database"
				:key="value"
				class="p-2"
			>
				{{ value }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const count = useState("count", () => 0);
console.log(count.value);

const { data } = await useFetch("/api/hello", {});

useHead({
	title: "The Open Query",
});
</script>
