import { request } from "../../../utiltis/AxiosUtilitis"

const AddToBalanceApi = async (obj) => {
  return request({ url: `/api/MoveToBalance/${obj?.id}/${obj?.mony}`,method:'post'})
}

export default AddToBalanceApi
