import { request } from "../../../utiltis/AxiosUtilitis"

const DeleteProfile = async (id) => {
  return request({ url: `/api/deleteProfileCustomerSellerAPI/${id}`,method:'delete'})
}

export default DeleteProfile
