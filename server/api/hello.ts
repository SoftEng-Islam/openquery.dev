export const database = ["apple", "pear", "grapes", "cher"];

export default defineEventHandler

((event) => {
	return {
		database,
	};
});
