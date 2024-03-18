import { request } from "../../../../utiltis/AxiosUtilitis"

const AddPartApi = async (formData) => {
  return request({ url: '/api/savepart',method:'post',data:formData,headers: {
    'Content-Type': 'multipart/form-data',
  }})

}

export default AddPartApi
