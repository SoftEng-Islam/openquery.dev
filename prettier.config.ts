import { type Config } from "prettier";

export default {
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	trailingComma: "all",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	endOfLine: "lf",
	printWidth: 80,
} satisfies Config;
