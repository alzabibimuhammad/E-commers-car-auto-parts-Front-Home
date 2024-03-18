import { request } from "../../../../utiltis/AxiosUtilitis"

const EditPartApi = (data) => {
    return request({url:`api/saveEditPart`,method:"post",data:data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },})

}

export default EditPartApi
