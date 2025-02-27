import { useMutation, useQueryClient } from "@tanstack/react-query";

import apiClient from "../http-common";
import { Form } from "../models/Form";

export const useCreateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (form: Omit<Form, "id">) => {
      const response = await apiClient.post("/forms", form);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
