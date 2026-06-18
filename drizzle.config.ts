import { config as loadEnv } from "dotenv";
import { defineConfig } from "drizzle-kit";

loadEnv({ override: true, quiet: true });

if (!process.env.DATABASE_URL) {
	throw new Error("DATABASE_URL is not set");
}

export default defineConfig({
	out: "./drizzle",
	schema: "./server/db/schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
});
