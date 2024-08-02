import { useMutation } from "@tanstack/react-query";

import apiClient from "../http-common";
import { Form } from "../models/Form";

export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: async (form: Form) => {
      const response = await apiClient.post("/forms", form);
      return response.data;
    },
  });
};
