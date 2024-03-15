import { request } from "../../../../utiltis/AxiosUtilitis"


const DeletePartApi = (id) => {
    return request({url:`api/deletePart/${id}`,method:"delete"})

}

export default DeletePartApi
