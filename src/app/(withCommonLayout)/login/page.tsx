"use client";

import FxForm from "@/src/components/form/FxForm";
import FxInput from "@/src/components/form/FxInput";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/src/schemas/login.schema";
import { Spinner } from "@nextui-org/react";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/Ui/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.provider";

const Login = () => {
  const { setIsLoading: userLoading } = useUser();
  const searchParmas = useSearchParams();
  const router = useRouter();
  const redirect = searchParmas.get("redirect");

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleUserLogin(data);
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);
  return (
    <>
      {isPending && <Loading />}
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with Foundx</h3>
        <p className="mb-4">welcome back let get started</p>
        <div className="w-[35%]">
          <FxForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidationSchema)}
          >
            <div className="py-3">
              <FxInput name="email" type="email" label="email" />
            </div>
            <div className="py-3">
              <FxInput name="password" type="password" label="password" />
            </div>
            <Button
              className="my-3 w-full rounded-md bg-default-900 ont-semibold text-default"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FxForm>
        </div>
      </div>
    </>
  );
};

export default Login;
