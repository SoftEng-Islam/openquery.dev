// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	modules: [
		"@nuxt/content",
		"@nuxt/eslint",
		"@nuxt/hints",
		"@nuxt/icon",
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
		"@nuxtjs/seo",
		"@vueuse/nuxt",
		"@nuxtjs/color-mode",
	],
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	compatibilityDate: "2024-04-03",
	vite: {
		plugins: [
			tailwindcss(),
		],
		optimizeDeps: {
			include: ["@unhead/schema-org/vue"],
		},
	},
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	// This configuration tells the module not to reach out to the internet
	fonts: {
		defaults: {
			weights: [400],
			styles: ["normal", "italic"],
			subsets: [
				"cyrillic-ext",
				"cyrillic",
				"greek-ext",
				"greek",
				"vietnamese",
				"latin-ext",
				"latin",
			],
		},
		experimental: {
			processCSSVariables: true,
		},
		families: [
			// Automatically resolved if @fontsource/roboto is in your package.json
			{ name: "Roboto", provider: "npm" },
			// Variable fonts are also supported
			{ name: "Inter Variable", provider: "npm" },
		],
	},
	ogImage: {
		zeroRuntime: true, // Disables dynamic server-side image generation
	},
});
