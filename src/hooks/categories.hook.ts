import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/Category";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["GET_CATEGORIES"],
    queryFn: async () => getCategories(),
  });
};
