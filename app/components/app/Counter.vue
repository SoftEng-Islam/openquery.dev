<template>
	<div class="bg-green-500 m-2 p-2 rounded-md">
		<h3>Counter: {{ count }}</h3>
		<button
			class="bg-green-100 m-2 p-2 rounded-md"
			@click="increment"
		>
			Increment
		</button>
		<button
			class="bg-green-100 m-2 p-2 rounded-md"
			@click="decrement"
		>
			Decrement
		</button>
	</div>
</template>

<script setup lang="ts">
const count = ref(0);

const increment = () => {
	count.value++;
};

const decrement = () => {
	count.value--;
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
