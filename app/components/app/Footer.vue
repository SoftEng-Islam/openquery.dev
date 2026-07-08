<template>
	<footer class="mt-20 border-t border-zinc-800 bg-zinc-950/50 py-12">
		<div class="mx-auto max-w-7xl px-4">
			<!-- Main Footer Content -->
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
				<!-- Brand Section -->
				<div class="md:col-span-1">
					<h2 class="text-xl font-bold text-white mb-1">OpenQuery</h2>
					<p class="text-xs text-emerald-400 font-medium mb-3">by Islam Ahmed</p>
					<p class="text-sm text-zinc-400 leading-relaxed">
						Web development insights, tutorials, and thoughts from SoftEng.
					</p>
					<div class="mt-4 flex gap-3">
						<a href="https://github.com/SoftEng-Islam" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition" title="GitHub - SoftEng-Islam">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 . 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.017 12.017 0 0024 12c0-6.63-5.37-12-12-12z"/>
							</svg>
						</a>
						<a href="https://x.com/SoftEng_Islam" target="_blank" rel="noopener noreferrer" class="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition" title="X (Twitter) - SoftEng_Islam">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
							</svg>
						</a>
						<a href="mailto:softeng.islam@gmail.com" class="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition" title="Email">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
							</svg>
						</a>
						<a href="#" class="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-800 hover:bg-emerald-600 text-zinc-300 hover:text-white transition" title="RSS Feed">
							<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
								<path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
							</svg>
						</a>
					</div>
				</div>

				<!-- Navigation -->
				<div>
					<h3 class="font-semibold text-white mb-4">Navigation</h3>
					<ul class="space-y-2">
						<li>
							<NuxtLink to="/" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
								Home
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/about" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
								About
							</NuxtLink>
						</li>
						<li>
							<a href="#" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
								Archive
							</a>
						</li>
						<li>
							<a href="#" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
								Search
							</a>
						</li>
					</ul>
				</div>

				<!-- Resources -->
				<div>
					<h3 class="font-semibold text-white mb-4">Resources</h3>
					<ul class="space-y-2">
						<li>
							<a href="#" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
								RSS Feed
							</a>
						</li>
						<li>
							<a href="#" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
								Sitemap
							</a>
						</li>
						<li>
							<a href="#" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" class="text-sm text-zinc-400 hover:text-emerald-400 transition">
								Terms of Service
							</a>
						</li>
					</ul>
				</div>

				<!-- Newsletter CTA -->
				<div class="md:col-span-1">
					<h3 class="font-semibold text-white mb-4">Get Updates</h3>
					<p class="text-sm text-zinc-400 mb-3">
						New posts delivered to your inbox weekly.
					</p>
					<form class="space-y-2" @submit.prevent>
						<input
							type="email"
							placeholder="your@email.com"
							class="w-full px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 transition"
						/>
						<button
							type="submit"
							class="w-full px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<!-- Divider -->
			<div class="border-t border-zinc-800 pt-8">
				<!-- Bottom Footer -->
				<div class="flex flex-col md:flex-row justify-between items-center gap-4">
					<div class="text-sm text-zinc-500">
						<p>&copy; 2026 Islam Ahmed (<a href="https://x.com/SoftEng_Islam" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition">@SoftEng</a>). All rights reserved.</p>
					</div>
					<div class="text-xs text-zinc-600 space-x-4">
						<span>Built with <a href="https://nuxt.com" target="_blank" class="text-emerald-400 hover:text-emerald-300">Nuxt</a></span>
						<span class="text-zinc-700">•</span>
						<span>Hosted on <a href="https://github.com" target="_blank" class="text-emerald-400 hover:text-emerald-300">GitHub</a></span>
						<span class="text-zinc-700">•</span>
						<span>Last updated July 8, 2026</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
// Footer component - no logic needed
</script>
