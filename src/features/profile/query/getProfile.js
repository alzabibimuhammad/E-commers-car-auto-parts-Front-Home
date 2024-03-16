import { useQuery } from '@tanstack/react-query'
import GetProfileApi from '../api/getProfileAPI'

const GetProfile = () => {
  const query = useQuery({ queryKey: ['Profile'], queryFn: GetProfileApi })

  return query
}

export default GetProfile
