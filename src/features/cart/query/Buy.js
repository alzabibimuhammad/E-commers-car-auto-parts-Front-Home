
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BuyApi from '../api/BuyApi';
import { showSuccesToast } from '../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../utiltis/showErrorToast';

const Buy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:BuyApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Cart");
      showSuccesToast("","Success")
    },
    onError:(data) =>{
        ShowErrorToast("","failed")
    }
  });
}

export default Buy

