<template>
	<div class="register-page w-full border p-2 rounded-md">
		<h1 class="mb-4 text-xl">
			Register Page
		</h1>
		<form
			action=""
			class="w-full flex flex-col items-start justify-center"
			@submit.prevent="submitForm()"
		>
			<label for="username">Username: </label>
			<input
				id="username"
				v-model="form.username"
				type="text"
				name="Username"
				placeholder="username"
				class="bg-gray-200 rounded-md mb-3 placeholder:text-black pl-2 focus:placeholder:opacity-0 text-blue-500"
			>
			<label for="password">Password: </label>
			<input
				id="password"
				v-model="form.password"
				type="password"
				name="password"
				placeholder="Password"
				class="bg-gray-200 rounded-md mb-3 placeholder:text-black pl-2 focus:placeholder:opacity-0 text-blue-500"
			>

			<button
				type="submit"
				class="bg-green-600 rounded-md p-2 cursor-pointer hover:opacity-50"
			>
				Submit
			</button>
		</form>
		<div
			v-if="error"
			class="bg-red-300 text-red-500 rounded-md mt-4 px-4 py-2"
		>
			{{ error }}
		</div>
	</div>
</template>

<script setup lang="ts">
const error = ref<string | null>(null);
async function submitForm() {
	error.value = null;
	if (!form.username && !form.password) {
		error.value = "You must specify a Username and Password!";
		return;
	}
	if (!form.username) {
		error.value = "You must specify a Username!";
		return;
	}
	else if (!form.password) {
		error.value = "You must specify a Password!";
		return;
	}
	const result = await $fetch.raw("/api/auth/register", {
		method: "POST",
		body: {
			username: form.username,
			password: form.password,
		},
	});
	// error.value = JSON.stringify(result);
	if (!result.ok) {
		error.value = "Something went wrong while registering";
		return;
	}
	error.value = "User Successfully Created";
}
const form = reactive({
	username: "",
	password: "",
});
</script>
