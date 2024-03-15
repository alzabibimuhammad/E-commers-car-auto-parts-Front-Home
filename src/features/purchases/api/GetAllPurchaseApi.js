import { request } from "../../../utiltis/AxiosUtilitis"

const GetAllPurchaseApi = async (id) => {
    return request({ url: `/api/showPrushesForCustomerAndSeller/${id}`,method:'get'})
    
}

export default GetAllPurchaseApi
