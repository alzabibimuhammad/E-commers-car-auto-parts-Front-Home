import { request } from "../../../../utiltis/AxiosUtilitis"

const UnDeletePartApi = async (id) => {
  return request({ url: `/api/unDeletedPart/${id}`,method:'put'})
}

export default UnDeletePartApi
