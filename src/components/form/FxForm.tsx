"use client";
import React, { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface fromConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}
interface IProps {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  defaultValues?: Record<string, any>;
  resolver?: any;
}

const FxForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
  const formConfig: fromConfig = {};

  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  const submitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FxForm;
