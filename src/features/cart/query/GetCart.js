import { useQuery } from '@tanstack/react-query'
import GetCartApi from '../api/GetCartApi'

const GetCart = () => {
  const query = useQuery({ queryKey: ['Cart'], queryFn: GetCartApi })

  return query
}

export default GetCart
