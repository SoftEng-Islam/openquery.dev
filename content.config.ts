import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: "**",
			schema: z.object({
				category: z.union([z.string(), z.array(z.string())]).optional(),
				author: z.string().optional(),
			}),
		}),
	},
});
