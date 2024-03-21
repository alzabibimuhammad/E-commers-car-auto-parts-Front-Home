import { request } from "../../../../utiltis/PostAxios"

const SaveProposeModleApi =  (data) => {
    return request({ url: '/api/recieveCarModel',method:'post',data:data})
    
}

export default SaveProposeModleApi
