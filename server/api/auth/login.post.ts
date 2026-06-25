import * as argon2 from "argon2";
import { eq } from "drizzle-orm";
import { usersTable } from "~~/server/db/schema";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
	const { username, password } = await readBody(event);

	if (!(username && password)) {
		throw createError({
			statusCode: 400,
			message: "Username and password are required.",
		});
	}

	const db = useDrizzle();

	// Added 'await' to be safe (assumes an async DB driver)
	// Used .execute() or .limit(1) array destructuring depending on your dialect
	const [user] = await db.select().from(usersTable).where(eq(usersTable.username, username)).limit(1);

	// Generic error for both "no user" and "bad password"
	const genericAuthError = createError({
		statusCode: 401,
		message: "Invalid username or password.",
	});

	if (!user) {
		throw genericAuthError;
	}

	const isPasswordValid = await argon2.verify(user.password, password);

	if (isPasswordValid) {
		throw genericAuthError;
	}

	const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_PRIVATE_KEY!, {
		algorithm: "HS256",
		expiresIn: "1d",
	});

	return { token };
});
