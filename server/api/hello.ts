import { fruitsTable } from "../db/schema";
import { useDrizzle } from "../utils/drizzle";

export default defineEventHandler (async () => {
	const fruits = useDrizzle().select().from(fruitsTable).all();
	// await new Promise(resolve => setTimeout(resolve, 3000));
	// throw createError("OOPSIE");
	return {
		fruits,
	};
});
