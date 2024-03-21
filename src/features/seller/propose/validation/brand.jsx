import * as Yup from 'yup';

export default function schemaBrand() {
  
    return  Yup.object({
    type: Yup.string().required("Please select a brand"),
  });
}
