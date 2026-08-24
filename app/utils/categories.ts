export function normalizeCategories(category: any): string[] {
	if (!category) {
		return [];
	}

	if (Array.isArray(category)) {
		return category.map((c) => String(c).trim()).filter(Boolean);
	}

	if (typeof category === "string") {
		return category
			.split(",")
			.map((c) => c.trim())
			.filter(Boolean);
	}

	return [];
}
