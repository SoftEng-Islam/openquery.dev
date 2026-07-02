<template>
	<nav
		:key="refreshKey"
		class="flex justify-between p-4 bg-neutral-800 rounded-md mb-4"
	>
		<NuxtLink to="/">Home</NuxtLink>

		<TransitionGroup
			tag="div"
			class="flex flex-row gap-x-4"
			name="fade-nav"
		>
			<div key="about">
				<nuxtLink to="/about">About</nuxtLink>
			</div>

			<div
				v-if="!user"
				key="guest"
				class="flex gap-x-3 flex-row items-center justify-center"
			>
				<div class="bg-amber-400 rounded-md px-3 py-2">
					<nuxtLink to="/register">Register</nuxtLink>
				</div>

				<div class="bg-green-400 rounded-md px-3 py-2">
					<nuxtLink to="/login">Login</nuxtLink>
				</div>
			</div>
			<div
				v-else
				key="user"
				class="flex gap-x-3 flex-row items-center justify-center"
			>
				<div @click="logout">
					Logout
				</div>
			</div>
		</TransitionGroup>
	</nav>
</template>

<script lang="ts" setup>
const refreshKey = useState<number>("navbarRefreshKey", () => 0);
const { data: user } = await useAsyncData("navbarUser", verifyAuth, {
	watch: [refreshKey],
});

async function logout() {
	useCookie("jwt_token").value = undefined;
	refreshKey.value++;
}

async function verifyAuth() {
	const token = useCookie("jwt_token");
	if (!token) {
		return;
	}
	const result = await $fetch("/api/auth/verifyToken", {
		method: "POST",
		body: { token: token.value },
	});
	if (!result.success) {
		return;
	}
	return result.user as JwtUserInfo;
}
</script>

<style scoped>
.fade-nav-enter-active,
.fade-nav-leave-active {
	transition: all 0.3s ease;
}
.fade-nav-enter-from {
	opacity: 0;
	transform: translateY(-10px);
}
.fade-nav-leave-to {
	opacity: 0;
	transform: translateY(10px);
}
.fade-nav-leave-active {
	position: absolute;
	right: 1rem;
}
</style>
