import { DatePicker } from "@nextui-org/date-picker";
import { IInput } from "../../../types";
import { Controller } from "react-hook-form";

interface IProps extends IInput {}

const FXDatePicker = ({ label, name }: IProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker label={label} className="max-w-[284px]" {...fields} />
      )}
    />
  );
};

export default FXDatePicker;
