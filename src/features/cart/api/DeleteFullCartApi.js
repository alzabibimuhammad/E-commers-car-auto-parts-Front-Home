import { request } from "../../../utiltis/AxiosUtilitis"

const DeleteFullCartApi = async () => {
  return request({ url: `/api/DeleteAllCart/${JSON.parse(sessionStorage.user).id}`,method:'delete'})
}

export default DeleteFullCartApi
