import { request } from "../../../../utiltis/PostAxios"

const SaveProposeCategoryApi =  (data) => {
    return request({ url: '/api/saveproposecategory',method:'post',data:data})
    
}

export default SaveProposeCategoryApi
