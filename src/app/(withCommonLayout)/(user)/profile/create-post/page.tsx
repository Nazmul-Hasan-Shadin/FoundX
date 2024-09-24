"use client";

import FxInput from "@/src/components/form/FxInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const page = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const {} = useFieldArray({
    name: "questions",
    control,
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FxInput name="title" label="Title" />
          <Divider className="my-5" />

          <div className="flex justify-between items-center">
            <h2 className="text-xl">Owner verifications </h2>
            <Button>Append</Button>
          </div>

          <Divider className="my-5" />
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
