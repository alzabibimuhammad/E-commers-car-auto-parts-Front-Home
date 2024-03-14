import { request } from "../../../utiltis/AxiosUtilitis"

const GetCartApi = async () => {
  return request({ url: '/api/me',method:'post'})
}

export default GetCartApi
