import { request } from "../../../../utiltis/AxiosUtilitis"

const GetPartsDetailsApi = async (id) => {
  return request({ url: `/api/PartDetails/${id}`})
}

export default GetPartsDetailsApi
