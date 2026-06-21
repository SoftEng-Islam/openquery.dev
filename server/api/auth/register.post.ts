import * as argon2 from "argon2";
import { table } from "node:console";

export default defineEventHandler(async (event) => {
	const { username, password } = await readBody(event);
	if (!(username && password)) {
		throw createError({ statusCode: 400, message: "Username and Password must be provided in data body." });
	}
	// Hashing the password before storing it in the database using argon2
	const hashedPassword = await argon2.hash("password");
	console.log("Hashed Password:", hashedPassword);
	const db = useDrizzle();
	const insertResult = db.insert(tables.usersTable).values({
		username: username,
		password: hashedPassword,
	}).returning();
	return { insertResult };
});
