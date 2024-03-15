import { useQuery } from '@tanstack/react-query'
import GetAllPartsSellerApi from '../../api/GetAllPartsSellerApi';

const GetAllSellerParts = (id) => {
  const query = useQuery({
    queryKey: ['Seller', id],
    queryFn: () => GetAllPartsSellerApi(id),
  });

  return query;
}

export default GetAllSellerParts
