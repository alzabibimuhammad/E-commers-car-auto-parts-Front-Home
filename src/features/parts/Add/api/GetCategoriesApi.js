import { request } from "../../../../utiltis/AxiosUtilitis"

const GetCategoriesApi = async () => {
  return request({ url: '/api/category',method:'get'})
}

export default GetCategoriesApi
