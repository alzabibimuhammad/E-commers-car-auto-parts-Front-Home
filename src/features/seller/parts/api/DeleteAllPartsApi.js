import { request } from "../../../../utiltis/AxiosUtilitis"


const DeleteAllPartsApi = (id) => {
    return request({url:`api/DeleteAllParts/${id}`,method:"delete"})

}

export default DeleteAllPartsApi
