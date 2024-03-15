import { request } from "../../../../utiltis/AxiosUtilitis"

const AddPart = async (formData) => {
  return request({ url: '/api/savepart',method:'post',data:formData})

}

export default AddPart
