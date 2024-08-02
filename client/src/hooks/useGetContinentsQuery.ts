import { useQuery } from "@tanstack/react-query";

import apiClient from "../http-common";

export const useGetContinentsQuery = () => {
  return useQuery({
    queryKey: ["get-continents"],
    queryFn: async () => {
      return await apiClient.get("/continents");
    },
  });
};
