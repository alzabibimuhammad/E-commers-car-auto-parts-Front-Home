import { request } from "../../../utiltis/AxiosUtilitis";

const GetTotalMonyApi = (id) => {
    return request({url:`api/totalMony/${id}`})
        // return fetch("http://127.0.0.1:8000/api/totalMony/" + id)
    //     .then((response) => response.json())
    //     .then((data) => data)
    //     .catch((error) => console.log(error)); 
   
}

export default GetTotalMonyApi
