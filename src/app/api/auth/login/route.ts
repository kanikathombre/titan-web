import { cookies } from "next/headers";

export async function POST() {
  const token = "mock-jwt-token";

  const expiry = Date.now() + 1000 * 60 * 60;

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    expires: new Date(expiry),
    path: "/",
  });

  return Response.json({
    success: true,
    token,
    expiry,
  });
}