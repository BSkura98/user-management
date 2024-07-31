import Form from "../../models/Form";

export const getFormService = async (id: number) => {
  return await Form.findOne({ where: { id } });
};
