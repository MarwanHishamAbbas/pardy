"use server";
import { cookies } from "next/headers";
import { signin, signup } from "@/utils/authTools";
import { z } from "zod";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/utils/constants";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerUser = async (prevState: any, formData: FormData) => {
  const data = authSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  try {
    const { token } = await signup(data);
    (await cookies()).set(COOKIE_NAME, token);
  } catch (error) {
    console.log(error);
    return { message: "Failed to Sign Up" };
  }

  redirect("/");
};

export const signInUser = async (prevState: any, formData: FormData) => {
  const data = authSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  try {
    const { token } = await signin(data);
    (await cookies()).set(COOKIE_NAME, token);
  } catch (error) {
    console.log(error);
    return { message: "Failed to Sign In", payload: "bitch" };
  }

  redirect("/");
};

export const signout = async () => {
  (await cookies()).delete(COOKIE_NAME);
  redirect("/signin");
};
