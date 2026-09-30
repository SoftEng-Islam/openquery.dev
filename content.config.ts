import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: "**",
			schema: z.object({
				date: z.coerce.date().optional(),
				updated: z.coerce.date().optional(),
				author: z.string().optional(),
				category: z.union([z.string(), z.array(z.string())]).optional(),
				tags: z.array(z.string()).default([]),
				image: z.string().optional(),
				imageAlt: z.string().optional(),
				draft: z.boolean().default(false),
				featured: z.boolean().default(false),
				lang: z.string().optional(),
			}),
		}),
	},
});
