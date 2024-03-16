import { request } from "../../../../utiltis/AxiosUtilitis"

const UndeleteAllPartsApi = async (id) => {
  return request({ url: `/api/UnDeleteAllParts/${id}`,method:'put'})
}

export default UndeleteAllPartsApi
