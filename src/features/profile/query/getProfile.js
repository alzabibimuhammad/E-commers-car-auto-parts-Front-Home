import { useQuery } from '@tanstack/react-query'
import GetCartApi from '../api/getProfileAPI'

const GetProfile = () => {
  const query = useQuery({ queryKey: ['Profile'], queryFn: GetCartApi })

  return query
}

export default GetProfile
