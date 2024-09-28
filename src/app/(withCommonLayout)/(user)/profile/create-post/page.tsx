"use client";

import FXDatePicker from "@/src/components/form/DatePicker";
import FXSelect from "@/src/components/form/FXSelect";
import FxInput from "@/src/components/form/FxInput";
import dateToIso from "@/src/utils/dateToIso";
import { Button } from "@nextui-org/button";

import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetCategories } from "@/src/hooks/categories.hook";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import FxTextArea from "@/src/components/form/FxTextArea";
import { useUser } from "@/src/context/user.provider";
import { useCreatePost } from "@/src/hooks/post.hooks";

const cityOpitons = allDistict()
  .sort()
  .map((city: string) => {
    return {
      key: city,
      label: city,
    };
  });

const CreatePost = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);
  const { mutate: handleCreatePost } = useCreatePost();

  const { user } = useUser();
  console.log(imageFiles, "state");

  const {
    data: categoriesData,
    isPending,
    isLoading: categoryLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categoriesData?.data && !categoryLoading) {
    categoryOptions = categoriesData.data.map(
      (category: {
        _id: string;
        key: string;
        label: string;
        name: string;
      }) => ({
        key: category._id,
        label: category.name,
      })
    );
  }

  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    name: "questions",
    control,
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();
    console.log(formData, "iam formdata");

    const postData = {
      ...data,
      user: user!._id,
      questions: data?.questions.map(
        (question: { value: string }) => question.value
      ),
      dateFound: dateToIso(data.foundDate),
    };

    formData.append("data", JSON.stringify(postData));

    for (let image of imageFiles) {
      formData.append("itemImages", image);
    }

    handleCreatePost(formData);
  };

  const handleFieldAppend = () => {
    append({ name: "questions" });
  };

  const handleImaeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setImageFiles((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=" h-full rounded-xl bg-gradient-to-b  from-default-100 px-[73px] py-12">
      <h1 className="text-2xl font-semibold">post a found item</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FxInput label="Ttle" name="title" />
            </div>

            <div className="min-w-fit flex-1">
              <FXDatePicker label="Found Date" name="foundDate" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FxInput label="Location" name="location" />
            </div>

            <div className="min-w-fit flex-1">
              <FXSelect options={cityOpitons} label="City" name="city" />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXSelect
                label="category"
                name="category"
                options={categoryOptions}
                isDisabled={!categorySuccess}
              />
            </div>

            <div className="min-w-fit flex-1">
              <label
                className="bg-gray-500 w-full block rounded-md h-full"
                htmlFor="image"
              >
                upload image
              </label>
              <input
                onChange={(e) => handleImaeChange(e)}
                className="hidden"
                id="image"
                multiple
                type="file"
              />
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            {imagePreviews.length &&
              imagePreviews.map((imageDataUrl) => (
                <div className="relative h-48 rounded-xl border-2  border-dashed border-default-300 p-2">
                  <img
                    className="w-full h-full object-cover"
                    alt="items"
                    src={imageDataUrl}
                  />
                </div>
              ))}
          </div>

          <FxTextArea label="Description" name="description" />

          <Divider className="my-5" />

          <div className="flex justify-between items-center">
            <h2 className="text-xl">Owner verifications </h2>
            <Button onClick={handleFieldAppend}>Append</Button>
          </div>

          {/* ============================fields ================== */}
          {fields.map((field, index) => (
            <div className="flex justify-between items-center">
              <FxInput name={`questions.${index}.value`} label="Question" />
              <Button type="button" onClick={() => remove(index)}>
                Remove
              </Button>
            </div>
          ))}

          <Divider className="my-5" />
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
