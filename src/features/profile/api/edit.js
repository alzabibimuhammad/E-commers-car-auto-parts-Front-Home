import { request } from "../../../utiltis/AxiosUtilitis"

const EditProfileApi = async (obj) => {
  return request({ url: '/api/updateProfile',method:'post',data:obj,
  headers: {
    'Content-Type': 'multipart/form-data',
  },})
}

export default EditProfileApi
