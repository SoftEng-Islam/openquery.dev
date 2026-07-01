<template>
	<nav
		:key="refreshKey"
		class="flex justify-between p-4 bg-neutral-800 rounded-md mb-4"
	>
		<ul class="flex flex-row gap-x-4 [&>li]:border [&>li]:px-3 [&>li]:rounded-md [&>li]:py-2 [&>li]:hover:bg-amber-600 [&>li]:cursor-pointer">
			<li>
				<nuxtLink to="/">Website</nuxtLink>
			</li>
			<li>
				<nuxtLink to="/about">About</nuxtLink>
			</li>
			<div
				v-if="!user"
				class="flex gap-x-3 flex-row items-center justify-center"
			>
				<li>
					<nuxtLink to="/register">Register</nuxtLink>
				</li>
				<li>
					<nuxtLink to="/login">Login</nuxtLink>
				</li>
			</div>
			<div
				v-else
				class="flex gap-x-3 flex-row items-center justify-center"
			>
				<div @click="logout">
					Logout
				</div>
				{{ user.username }}
			</div>
		</ul>
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
