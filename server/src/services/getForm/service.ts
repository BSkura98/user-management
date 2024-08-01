import { NotFoundError } from "../../errors/NotFoundError";
import Form from "../../models/Form";

export const getFormService = async (id: number) => {
  const form = await Form.findOne({ where: { id } });
  if(!form){
    throw new NotFoundError('Form not found');
  }
  return form;
};
