export const database = ["apple", "pear", "grapes", "cher"];

export default defineEventHandler (async (event) => {
	// await new Promise(resolve => setTimeout(resolve, 3000));
	// throw createError("OOPSIE");
	return {
		database,
	};
});
