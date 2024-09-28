import React from "react";
import { IInput } from "../../../types";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@nextui-org/input";

interface IProps extends IInput {
  type?: string;
}
const FxTextArea = ({ name, label, variant = "bordered" }: IProps) => {
  const {
    register,
    formState: { error },
  } = useFormContext();
  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
};

export default FxTextArea;
