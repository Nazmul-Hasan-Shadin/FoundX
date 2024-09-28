"use server";

import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userDatas: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userDatas);
    cookies().set("accessToken", data?.data?.accessToken);
    cookies().set("refreshToken", data?.data?.refreshToken);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userDatas: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userDatas);
    cookies().set("accessToken", data?.data?.accessToken);
    cookies().set("refreshToken", data?.data?.refreshToken);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  let decodedToken = null;
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    console.log(decodedToken);
    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      profilePhoto: decodedToken.profilePhoto,
      role: decodedToken.role,
      status: decodedToken.status,
    };
  }
  return decodedToken;
};
