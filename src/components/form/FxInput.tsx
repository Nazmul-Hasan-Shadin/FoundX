"use client";

import { Input } from "@nextui-org/input";

import React from "react";
import { useFormContext } from "react-hook-form";

interface Iprops {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label?: string;
  name: string;
}

const FxInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: Iprops) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);

  return (
    <Input
      {...register(name)}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name]?.message as string) : ""}
      type={type}
      variant={variant}
      label={label}
      size={size}
      required={required}
    />
  );
};

export default FxInput;
