import { useQuery } from '@tanstack/react-query'
import GetAllSalesApi from '../../api/GetAllSalesApi';

export default function GetAllSales (id) {
  const query = useQuery({
    queryKey: ['Sales', id],
    queryFn: () => GetAllSalesApi(id),
  });

  return query;
}


