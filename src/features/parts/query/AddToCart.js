
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ShowErrorToast } from '../../../utiltis/showErrorToast';
import { showSuccesToast } from '../../../utiltis/toastSecces';
import AddToCartApi from '../api/addToCartApi';

const AddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddToCartApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Cart");
      showSuccesToast("","success")
    },
    onError:(data) => {
      ShowErrorToast( data?.response?.data[0])
    }
  });
}

export default AddToCart

