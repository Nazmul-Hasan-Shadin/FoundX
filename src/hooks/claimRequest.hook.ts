import { useMutation } from "@tanstack/react-query";
import exp from "constants";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { addClaimRequest } from "../services/ClaimRequest";

export const useAddClaimRequest = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (postData) => await addClaimRequest(postData),
    onSuccess() {
      toast.success("claim request created successful");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
