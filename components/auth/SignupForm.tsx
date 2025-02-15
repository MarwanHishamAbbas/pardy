"use client";

import { registerUser } from "@/actions/auth";
import Link from "next/link";

import { Input } from "../ui/input";
import Submit from "./Submit";
import { useActionState } from "react";

const SignupForm = () => {
  const [formState, action] = useActionState(registerUser, null);

  return (
    <form
      action={action}
      className="border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 w-full "
    >
      <h3 className="my-4">Sign up</h3>
      <Input placeholder="Email" name="email" required />
      <Input name="password" type="password" placeholder="Password" required />
      <Submit label={"Sign Up"} />
      <div>
        <Link href="/signin">{`Already have an account?`}</Link>
      </div>
      {formState?.message && <p>{formState.message}</p>}
    </form>
  );
};

export default SignupForm;
