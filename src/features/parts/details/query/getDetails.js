import { useQuery } from '@tanstack/react-query'
import GetPartsDetailsApi from '../api/GetPartDetailsApi';

const GetPartsDetails = (id) => {
  const query = useQuery({
    queryKey: ['Details', id],
    queryFn: () => GetPartsDetailsApi(id),
  });

  return query;
}

export default GetPartsDetails
