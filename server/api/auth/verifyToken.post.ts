import jwt from "jsonwebtoken";
import type { JwtUserInfo } from "~~/shared/types/JwtUserInfo";

export default defineEventHandler(async (event) => {
	const { token } = await readBody(event);
	if (!token) {
		throw createError({ statusCode: 400, message: "No token was passed" });
	}
	const user = jwt.verify(token, process.env.JWT_PRIVATE_KEY!) as JwtUserInfo;
	if (user) {
		return { success: true, user };
	}
	throw createError({ statusCode: 401 });
});
