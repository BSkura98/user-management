import { useQuery } from "@tanstack/react-query";

import apiClient from "../http-common";

export const useGetUserQuery = (id: number) => {
  return useQuery({
    queryKey: [`users/${id}`],
    queryFn: async () => {
      const response = await apiClient.get(`/forms/${id}`);
      return response.data;
    },
  });
};
