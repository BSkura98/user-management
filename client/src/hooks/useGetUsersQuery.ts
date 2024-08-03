import { useQuery } from "@tanstack/react-query";

import apiClient from "../http-common";

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      return await apiClient.get("/forms");
    },
  });
};
