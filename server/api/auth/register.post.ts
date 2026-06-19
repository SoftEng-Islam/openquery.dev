export default defineEventHandler(async (event) => {
	const { username, password } = await readBody(event);
	if (!(username && password)) {
		throw createError({ statusCode: 400, message: "Username and Password must be provided in data body." });
	}
});
