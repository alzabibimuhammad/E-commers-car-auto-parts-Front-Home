import { request } from "../../../../utiltis/AxiosUtilitis"

const GetAllSalesApi = async (id) => {
    return request({ url: `/api/showSalesForCertainSeller/${id}`,method:'get'})
    
}

export default GetAllSalesApi
