import { request } from "../../../utiltis/AxiosUtilitis"

const BecomeAsellerApi = async (data) => {
  return request({ url: '/api/post-registration',method:'post',data:data})
}

export default BecomeAsellerApi
