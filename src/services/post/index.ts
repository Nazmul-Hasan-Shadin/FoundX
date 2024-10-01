"use server";
import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { getCurrentUser } from "../AuthServices";

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

export const getPost = async (postId: string) => {
  let fetchOptions = {
    cache: "no-store" as RequestCache,
  };
  const res = await fetch(`${envConfig.baseApi}/items/${postId}`, fetchOptions);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getMyPosts = async () => {
  const user = await getCurrentUser();

  const res = await axiosInstance.get(`/items?user=${user?._id}`);

  return res.data;
};
