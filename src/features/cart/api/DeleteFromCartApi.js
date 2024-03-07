import { request } from "../../../utiltis/AxiosUtilitis"

const DeleteFromCartApi = async (part_id) => {
  return request({ url: `/api/deletefromcart/${part_id}`,method:'delete'})
}

export default DeleteFromCartApi
