import { request } from "../../../utiltis/AxiosUtilitis"

const GetPartsApi = async () => {
  return request({ url: '/api/carParts'})
}

export default GetPartsApi
