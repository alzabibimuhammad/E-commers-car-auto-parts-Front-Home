import { request } from "../../../../utiltis/AxiosUtilitis"


export default function GetBrandsApi () {
    return request({ url: '/api/Brands',method:'get'})
    
}
