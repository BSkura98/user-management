import Form from "../../models/Form";

export const getFormsService = async () => {
  return await Form.findAll();
};
