
import { useQuery } from '@tanstack/react-query'
import GetAllDeletedPartsApi from '../../api/GetAllDeletedPartsApi';

export default function GetAllDeletedParts  (id)  {
  const query = useQuery({
    queryKey: ['DeletedParts', id],
    queryFn: () => GetAllDeletedPartsApi(id),
  });

  return query;
}

