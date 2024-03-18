import * as Yup from 'yup';

export default function schema() {
  return  Yup.object({
    name: Yup.string().required("please write name").max(10).min(5),
    amount: Yup.number().required().min(1),
    price: Yup.number().required().min(1),
    description: Yup.string().required().min(5),
    model_id: Yup.string().required("Please select a model").notOneOf(["t"], "Please select a model"),
    category_id: Yup.string().required("Please select a category").notOneOf(["t"], "Please select a category"),
  });
}
