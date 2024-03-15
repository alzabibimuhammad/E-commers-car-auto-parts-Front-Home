import { request } from "../../../../utiltis/AxiosUtilitis"

const GetAllPartsSellerApi = async (id) => {
    return request({ url: `/api/showPartSeller/${id}`,method:'get'})
    
}

export default GetAllPartsSellerApi
