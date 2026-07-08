<template>
	<div class="max-w-3xl">
		<!-- Hero Section -->
		<section class="mb-12 pb-12 border-b border-zinc-800">
			<p class="text-sm uppercase tracking-[0.2em] font-semibold text-emerald-400 mb-4">
				About me
			</p>
			<h1 class="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
				Hi, I'm Islam Ahmed (@SoftEng)
			</h1>
			<p class="text-xl text-zinc-300 leading-relaxed">
				Web developer, creative technologist, and digital explorer. I write about code, design, and the craft of building things that matter.
			</p>
		</section>

		<!-- Content Sections -->
		<div class="space-y-12">
			<!-- Bio -->
			<section>
				<h2 class="text-3xl font-bold text-white mb-4">
					My journey
				</h2>
				<p class="text-lg text-zinc-300 leading-relaxed">
					I'm passionate about web development and creating beautiful, functional digital experiences. This space exists to share what I learn along the way—whether it's technical tutorials, design insights, or reflections on the creative process.
				</p>
			</section>

			<!-- What to Expect -->
			<section>
				<h2 class="text-3xl font-bold text-white mb-6">
					What you'll find here
				</h2>
				<ul class="space-y-4">
					<li class="flex gap-4">
					<div class="shrink-0 pt-1">
							<div class="flex items-center justify-center h-6 w-6 rounded-lg bg-emerald-500/20">
								<svg class="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-white mb-1">Tutorials & Guides</h3>
							<p class="text-zinc-400">Step-by-step walkthroughs and practical guides for web development concepts.</p>
						</div>
					</li>

					<li class="flex gap-4">
					<div class="shrink-0 pt-1">
							<div class="flex items-center justify-center h-6 w-6 rounded-lg bg-emerald-500/20">
								<svg class="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-white mb-1">Project Updates</h3>
							<p class="text-zinc-400">Progress reports and reflections from ongoing projects and experiments.</p>
						</div>
					</li>

					<li class="flex gap-4">
					<div class="shrink-0 pt-1">
							<div class="flex items-center justify-center h-6 w-6 rounded-lg bg-emerald-500/20">
								<svg class="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-white mb-1">Thoughtful Reflections</h3>
							<p class="text-zinc-400">Notes on learning, growth, and the lessons that stick with me.</p>
						</div>
					</li>
				</ul>
			</section>

			<!-- Tech Stack -->
			<section>
				<h2 class="text-3xl font-bold text-white mb-6">
					Built with
				</h2>
				<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
					<div class="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
						<div class="text-sm font-semibold text-emerald-400 mb-1">Nuxt</div>
						<div class="text-xs text-zinc-400">Vue framework for static generation</div>
					</div>
					<div class="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
						<div class="text-sm font-semibold text-emerald-400 mb-1">Tailwind CSS</div>
						<div class="text-xs text-zinc-400">Utility-first styling</div>
					</div>
					<div class="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/50 transition-colors">
						<div class="text-sm font-semibold text-emerald-400 mb-1">Markdown</div>
						<div class="text-xs text-zinc-400">Simple content format</div>
					</div>
				</div>
			</section>

			<!-- Connect -->
			<section class="pt-8 border-t border-zinc-800">
				<h2 class="text-3xl font-bold text-white mb-4">
					Let's connect
				</h2>
				<p class="text-zinc-300 mb-6">
					Found a typo? Want to discuss web development? Or just want to say hello? Feel free to reach out on social media or send me an email.
				</p>
				<div class="flex flex-wrap gap-4 mb-8">
					<a
						href="https://github.com/SoftEng-Islam"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-emerald-600/20 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-emerald-300 font-medium transition-colors"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.017 12.017 0 0024 12c0-6.63-5.37-12-12-12z"/>
						</svg>
						<span>GitHub</span>
					</a>
					<a
						href="https://x.com/SoftEng_Islam"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-emerald-600/20 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-emerald-300 font-medium transition-colors"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
						</svg>
						<span>X (Twitter)</span>
					</a>
					<a
						href="mailto:softeng.islam@gmail.com"
						class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-emerald-600/20 border border-zinc-800 hover:border-emerald-500 text-zinc-300 hover:text-emerald-300 font-medium transition-colors"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
						</svg>
						<span>Email</span>
					</a>
				</div>
				<NuxtLink
					to="/"
					class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-colors"
				>
					<span>Back to blog</span>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
				</NuxtLink>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: "Islam Ahmed (@SoftEng) • OpenQuery",
	description: "Islam Ahmed is a web developer (@SoftEng) creating tutorials, guides, and insights on code, design, and creative development.",
	ogTitle: "Islam Ahmed (@SoftEng) • OpenQuery",
	ogDescription: "Web developer sharing tutorials, guides, and insights on code and design.",
	twitterTitle: "Islam Ahmed (@SoftEng) • OpenQuery",
	twitterDescription: "Web developer sharing tutorials, guides, and insights on code and design.",
});

useHead({
	meta: [
		{
			name: "keywords",
			content: "Islam Ahmed, SoftEng, web developer, tutorials, code, design",
		},
	],
});
</script>
