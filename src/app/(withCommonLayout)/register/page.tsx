"use client";

import FxForm from "@/src/components/form/FxForm";
import FxInput from "@/src/components/form/FxInput";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/src/schemas/login.schema";
import { registerUser } from "@/src/services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { useUserRegistration } from "@/src/hooks/auth.hook";

const Register = () => {
  const { mutate: handleUserRegistration } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data, "iam data");

    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    handleUserRegistration(userData);
  };
  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with Foundx</h3>
      <p className="mb-4">welcome back let get started</p>
      <div className="w-[35%]">
        <FxForm
          onSubmit={onSubmit}
          defaultValues={{
            name: "Nazmul Hasan Shadin",
            email: "nazmulhasanshadin000@gmail.com",
            password: "123456",
            mobileNumber: "01302508989",
          }}
        >
          <div className="py-3">
            <FxInput name="name" type="text" label="Name" size="sm" />
          </div>
          <div className="py-3">
            <FxInput name="email" type="email" label="email" size="sm" />
          </div>
          <div className="py-3">
            <FxInput
              name="mobileNumber"
              type="number"
              label="Number"
              size="sm"
            />
          </div>
          <div className="py-3">
            <FxInput name="password" type="password" label="password" />
          </div>
          <Button
            className="my-3 w-full rounded-md bg-default-900 ont-semibold text-default"
            size="lg"
            type="submit"
          >
            Register
          </Button>
        </FxForm>
      </div>
    </div>
  );
};

export default Register;
