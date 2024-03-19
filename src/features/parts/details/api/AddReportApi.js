import { request } from "../../../../utiltis/AxiosUtilitis"

const AddReportApi = async (data) => {
  return request({ url: '/api/Addreport',data:data,method:'post'})
}

export default AddReportApi
