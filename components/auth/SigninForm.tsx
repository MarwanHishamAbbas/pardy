"use client";

import { signInUser } from "@/actions/auth";
import Link from "next/link";

import { Input } from "../ui/input";
import Submit from "./Submit";
import { useActionState } from "react";

const SigninForm = () => {
  const [formState, action] = useActionState(signInUser, null);

  return (
    <form
      action={action}
      className="border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 w-full "
    >
      <h3 className="my-4">Sign In</h3>
      <Input placeholder="Email" name="email" required />
      <Input name="password" type="password" placeholder="Password" required />
      <Submit label={"Sign In"} />
      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
      {formState?.message && <p>{formState.message}</p>}
    </form>
  );
};

export default SigninForm;
