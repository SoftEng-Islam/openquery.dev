import { text, int, sqliteTable } from "drizzle-orm/sqlite-core";

export const fruitsTable = sqliteTable("fruits", {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
});
