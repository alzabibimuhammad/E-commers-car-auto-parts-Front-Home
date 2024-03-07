import { useQuery } from '@tanstack/react-query'
import GetPartsApi from '../api/getPartsApi'

const GetAllParts = () => {
  const query = useQuery({ queryKey: ['Parts'], queryFn: GetPartsApi })

  return query
}

export default GetAllParts
