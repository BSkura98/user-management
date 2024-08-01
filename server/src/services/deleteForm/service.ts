import Form from "../../models/Form";
import { NotFoundError } from "../../errors/NotFoundError";

export const deleteFormService = async (id: number) => {
  const form = await Form.findOne({ where: { id } });
  if(!form){
    throw new NotFoundError('Form not found');
  }
  return await form.destroy();;
};
