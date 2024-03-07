import { request } from "../../../utiltis/AxiosUtilitis"

const BuyApi = async () => {
  return request({ url: `/api/buycart?id=${JSON.parse(sessionStorage.user).id}`,method:'get'})
}

export default BuyApi
