import * as argon2 from "argon2";
import { eq } from "drizzle-orm";
import { usersTable } from "~~/server/db/schema";

export default defineEventHandler(async (event) => {
	const { username, password } = await readBody(event);
	console.log(password);
	if (!(username && password)) {
		throw createError({ statusCode: 400, message: "Username and Password must be provided in data body." });
	}
	const db = useDrizzle();
	const user = db.select().from(usersTable).where(eq(usersTable.username, username)).limit(1).get();

	if (!user) {
		throw createError({ statusCode: 404, message: "User could not be found from the database with given username." });
	}
	if (!(await argon2.verify(user.password, password))) {
		throw createError({ statusCode: 401, message: "Invalid Password" });
	}
	return { success: true };
});
