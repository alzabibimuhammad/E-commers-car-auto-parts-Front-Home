import { request } from "../../../utiltis/AxiosUtilitis"

const AddToCartApi = async (obj) => {
  return request({ url: `/api/AddToCart?customer_id=${obj.customer_id}&amount=${obj.amount}&part_id=${obj.partID}`,method:'post'})
}

export default AddToCartApi
