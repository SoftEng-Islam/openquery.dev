<template>
	<nav class="flex justify-between p-4 bg-neutral-800 rounded-md mb-4">
		<ul class="flex flex-row gap-x-4 [&>li]:border [&>li]:px-3 [&>li]:rounded-md [&>li]:py-2 [&>li]:hover:bg-amber-600 [&>li]:cursor-pointer">
			<li>
				<nuxtLink to="/">Website</nuxtLink>
			</li>
			<li>
				<nuxtLink to="/about">About</nuxtLink>
			</li>
			<li>
				<nuxtLink to="/register">Register</nuxtLink>
			</li>
			<li>
				<nuxtLink to="/login">Login</nuxtLink>
			</li>
		</ul>
	</nav>
</template>
