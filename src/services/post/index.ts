"use server";
import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (formData: FormData): Promise<any> => {
  console.log(process.env.NEXT_PUBLIC_BASE_API, "iam original");
  try {
    const { data } = await axiosInstance.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    revalidateTag("posts");
    return data;
  } catch (error) {
    throw new Error("Failed to create post");
  }
};
