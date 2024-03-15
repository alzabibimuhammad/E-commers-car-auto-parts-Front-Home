import { useQuery } from '@tanstack/react-query'
import GetAllPurchaseApi from '../../api/GetAllPurchaseApi';

const GetAllPurchase = (id) => {
  const query = useQuery({
    queryKey: ['ReportDay', id],
    queryFn: () => GetAllPurchaseApi(id),
  });

  return query;
}

export default GetAllPurchase
