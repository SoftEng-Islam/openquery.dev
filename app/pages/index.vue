<template>
	<div>
		<PageTitle color-class="text-green-500">
			Home Page
		</PageTitle>
		<NuxtLink to="/about">About</NuxtLink>
		<NuxtImg
			src="/img/BTA12.jpg"
			alt="Nuxt Logo"
			width="200"
			height="200"
			format="webp"
			placeholder="blur"
			quality="50"
			fit="cover"
			preload
			loading="lazy"
		/>
		<br>
		{{ count }}
		<br>
		<button
			class="px-2 py-1 rounded-md bg-green-400"
			@click="count++"
		>
			Click
		</button>
		<ClientOnly>
			<p v-if="pending">
				loading...
			</p>
			<p v-if="error">
				There was an error OMG. {{ error.data.message }}
			</p>
			<ul v-else>
				<li
					v-for="fruit in data?.fruits"
					:key="fruit.id"
					class="p-2"
				>
					{{ fruit.name }}
				</li>
			</ul>
		</ClientOnly>
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
