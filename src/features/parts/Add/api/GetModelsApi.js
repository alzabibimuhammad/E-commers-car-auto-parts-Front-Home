import { request } from "../../../../utiltis/AxiosUtilitis"

const GetModelsApi = async () => {
  return request({ url: '/api/Models',method:'get'})
}

export default GetModelsApi
