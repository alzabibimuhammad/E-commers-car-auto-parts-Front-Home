import * as Yup from 'yup';

export default function schemaProposeCategory() {
  
    return  Yup.object({
    name:Yup.string().required("please write a category name"),
    description:Yup.string().required("please write description "),
  });
}
