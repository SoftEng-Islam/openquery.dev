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
		<p v-if="pending">
			loading...
		</p>
		<p v-if="error">
			There was an error OMG. {{ error.data.message }}
		</p>
		<ul v-else>
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

const { data, pending, error } = await useFetch("/api/hello", { server: false });

useHead({
	title: "The Open Query",
});
</script>
