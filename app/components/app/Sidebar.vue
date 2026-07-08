<template>
	<div class="space-y-6">
		<!-- About Section -->
		<section class="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-sm">
			<h3 class="text-lg font-semibold text-white mb-3">About this blog</h3>
			<p class="text-sm text-zinc-400 leading-relaxed">
				A space for thoughts on code, design, and the craft of building things. Exploring ideas through writing.
			</p>
			<NuxtLink
				to="/about"
				class="mt-4 inline-block text-sm font-medium text-emerald-400 hover:text-emerald-300 transition"
			>
				Learn more →
			</NuxtLink>
		</section>

		<!-- Recent Posts Section -->
		<section class="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-sm">
			<h3 class="text-lg font-semibold text-white mb-4">Recent posts</h3>
			<ul v-if="posts && posts.length > 0" class="space-y-3">
				<li v-for="post in posts.slice(0, 5)" :key="post.path">
					<NuxtLink
						:to="post.path"
						class="group block"
					>
						<div class="flex items-start gap-2">
							<span class="text-emerald-400/60 group-hover:text-emerald-400 transition text-xs font-mono mt-0.5">→</span>
							<div>
								<p class="text-sm font-medium text-zinc-200 group-hover:text-white transition line-clamp-2">
									{{ post.title }}
								</p>
								<p class="text-xs text-zinc-500 mt-1">
									{{ formatDate(post.date) }}
								</p>
							</div>
						</div>
					</NuxtLink>
				</li>
			</ul>
			<p v-else class="text-sm text-zinc-500">
				No posts yet
			</p>
		</section>

		<!-- Categories Section -->
		<section class="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-sm">
			<h3 class="text-lg font-semibold text-white mb-4">Topics</h3>
			<div class="flex flex-wrap gap-2">
				<span class="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-full hover:bg-emerald-400/20 transition cursor-pointer">
					Development
				</span>
				<span class="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-full hover:bg-emerald-400/20 transition cursor-pointer">
					Design
				</span>
				<span class="inline-block px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 rounded-full hover:bg-emerald-400/20 transition cursor-pointer">
					Ideas
				</span>
			</div>
		</section>

		<!-- Newsletter Section -->
		<section class="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 shadow-sm">
			<h3 class="text-lg font-semibold text-white mb-2">Stay updated</h3>
			<p class="text-sm text-zinc-400 mb-4">
				Get new posts delivered to your inbox.
			</p>
			<form class="space-y-3" @submit.prevent>
				<input
					type="email"
					placeholder="your@email.com"
					class="w-full px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition"
				/>
				<button
					type="submit"
					class="w-full px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition"
				>
					Subscribe
				</button>
			</form>
		</section>

		<!-- Archive Section -->
		<section class="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-sm">
			<h3 class="text-lg font-semibold text-white mb-4">Archive</h3>
			<ul class="space-y-2">
				<li>
					<a href="#" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
						2026 (1)
					</a>
				</li>
				<li>
					<a href="#" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
						2025 (0)
					</a>
				</li>
			</ul>
		</section>

		<!-- Author Info -->
		<section class="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-sm">
			<h3 class="text-lg font-semibold text-white mb-4">About the author</h3>
			<div class="flex items-center gap-3 mb-4">
				<div class="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
					IA
				</div>
				<div>
					<p class="font-semibold text-white">Islam Ahmed</p>
					<a href="https://x.com/SoftEng_Islam" target="_blank" rel="noopener noreferrer" class="text-xs text-emerald-400 hover:text-emerald-300 transition">
						@SoftEng
					</a>
				</div>
			</div>
			<p class="text-sm text-zinc-400 leading-relaxed mb-4">
				Web developer and digital creator exploring the intersection of code and design.
			</p>
			<div class="flex gap-2">
				<a href="https://github.com/SoftEng-Islam" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition" title="GitHub - SoftEng-Islam">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.017 12.017 0 0024 12c0-6.63-5.37-12-12-12z"/>
					</svg>
				</a>
				<a href="https://x.com/SoftEng_Islam" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition" title="X (Twitter) - SoftEng_Islam">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
					</svg>
				</a>
				<a href="mailto:softeng.islam@gmail.com" class="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition" title="Email">
					<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
					</svg>
				</a>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-posts", async () => {
	const allPages = await queryCollection("content").all();

	return allPages
		.filter((page: any) => page.path.startsWith("/posts/"))
		.sort((a: any, b: any) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
		.map((page: any) => ({
			title: page.title || "Untitled post",
			description: page.description || "A new entry from the blog.",
			path: page.path,
			date: page.date,
		}));
});

function formatDate(value?: string | number | Date) {
	if (!value) {
		return "Recently published";
	}

	return new Date(value).toLocaleDateString("en", {
		month: "short",
		day: "numeric",
		year: "numeric",
	});
}
</script>