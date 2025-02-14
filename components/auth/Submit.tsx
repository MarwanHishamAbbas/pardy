"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Attributes, FC, HTMLAttributes } from "react";

interface SubmitButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Submit: FC<SubmitButtonProps> = ({ label, ...btnProps }) => {
  const { pending } = useFormStatus();

  return (
    <Button {...btnProps} type="submit" isLoading={pending}>
      {label}
    </Button>
  );
};

export default Submit;
