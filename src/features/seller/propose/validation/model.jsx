import * as Yup from 'yup';

export default function schemaPropose() {
  
    return  Yup.object({
    model: Yup.string().required("please write model name"),
    type: Yup.string().required("Please select a model").notOneOf(["t"], "Please select a model"),
  });
}
