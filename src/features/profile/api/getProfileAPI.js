import { request } from "../../../utiltis/AxiosUtilitis"

const GetProfileApi = async () => {
  return request({ url: '/api/me',method:'post'})
}

export default GetProfileApi
