import { request } from "../../../../utiltis/AxiosUtilitis"

const GetAllDeletedPartsApi = async (id) => {
    return request({ url: `/api/showDeletedPart/${id}`,method:'get'})
    
}

export default GetAllDeletedPartsApi
