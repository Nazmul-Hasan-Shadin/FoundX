import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { IInput } from "../../../types";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({
  options,
  name,
  label,
  variant = "bordered",
  disabled,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);

  return (
    <Select
      {...register(name)}
      label={label}
      placeholder="Select an animal"
      variant={variant}
      className="max-w-xs"
      disabled={disabled}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
