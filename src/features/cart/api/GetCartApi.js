import { request } from "../../../utiltis/AxiosUtilitis"

const GetCartApi = async () => {
  return request({ url: `/api/ShowCart/${JSON.parse(sessionStorage.user).id}`})
}

export default GetCartApi
