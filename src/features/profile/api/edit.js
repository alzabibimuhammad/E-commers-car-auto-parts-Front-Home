import { request } from "../../../utiltis/AxiosUtilitis"

const EditProfileApi = async (obj) => {
  return request({ url: '/api/updateProfile',method:'put',data:obj})
}

export default EditProfileApi
