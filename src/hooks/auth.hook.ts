import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/AuthServices";
import { FieldValues } from "react-hook-form";
import { Toaster, toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      console.log("user creation successful");
      toast.success("user registration successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      console.log("user Login successful");
      toast.success("user Login successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
