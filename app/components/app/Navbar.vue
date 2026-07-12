<template>
	<nav class="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
		<div class="mx-auto max-w-7xl px-4 py-4 sm:px-6">
			<div class="flex items-center justify-between">
				<!-- Logo Section -->
				<div class="flex items-center gap-3">
					<NuxtLink
						to="/"
						class="flex flex-col gap-0.5"
					>
						<div class="text-lg font-bold tracking-tight text-white">
							OpenQuery
						</div>
						<div class="text-xs text-zinc-500 font-medium">
							Blog & Insights
						</div>
					</NuxtLink>
				</div>

				<!-- Main Navigation -->
				<div class="hidden md:flex items-center gap-1">
					<NuxtLink
						to="/"
						:class="navLinkClass('/')"
					>
						Home
					</NuxtLink>
					<NuxtLink
						to="/about"
						:class="navLinkClass('/about')"
					>
						About
					</NuxtLink>
					<NuxtLink
						to="/blog"
						:class="navLinkClass('/blog')"
					>
						Blog
					</NuxtLink>
				</div>

				<!-- Right Side Actions -->
				<div class="flex items-center gap-3">
					<!-- Search Icon -->
					<button
						class="p-2 text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md transition-all duration-200"
						aria-label="Search"
					>
						<svg
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>

					<!-- Mobile Menu Button -->
					<button
						class="p-2 md:hidden text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md transition-all duration-200"
						aria-label="Menu"
					>
						<svg
							class="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
const route = useRoute();

const navLinkClass = (to: string, isHash = false) => {
	const base = "px-3 py-2 text-sm font-medium rounded-md transition-all duration-200";
	const active = isHash
		? route.path === "/" && route.hash === to
		: route.path === to;

	return [
		base,
		active
			? "text-white bg-emerald-600/15 border border-emerald-500 shadow-sm shadow-emerald-500/10"
			: "text-zinc-300 hover:text-white hover:bg-zinc-900/50",
	].join(" ");
};
</script>
