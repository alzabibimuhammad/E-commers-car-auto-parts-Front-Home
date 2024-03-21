
import { request } from "../../../../utiltis/PostAxios"

const sendCarTypeApi =  (data) => {
    return request({ url: '/api/sendCarType',method:'post',data:data})
    
}

export default sendCarTypeApi
