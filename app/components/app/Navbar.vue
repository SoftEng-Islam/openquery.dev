<template>
	<nav class="mb-6 flex flex-wrap items-center justify-between rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-3 shadow-sm">
		<NuxtLink
			to="/"
			class="text-lg font-semibold tracking-tight text-white"
		>
			OpenQuery
		</NuxtLink>

		<div class="flex items-center gap-4 text-sm text-zinc-300">
			<NuxtLink
				to="/"
				class="transition hover:text-white"
			>
				Home
			</NuxtLink>
			<NuxtLink
				to="/about"
				class="transition hover:text-white"
			>
				About
			</NuxtLink>
		</div>
	</nav>
</template>
