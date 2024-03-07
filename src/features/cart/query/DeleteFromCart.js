
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showSuccesToast } from '../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../utiltis/showErrorToast';
import DeleteFromCartApi from '../api/DeleteFromCartApi';

const DeleteFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeleteFromCartApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Cart");
      showSuccesToast("","Deleted")
    },
    onError:(data) =>{
        ShowErrorToast("","Delete failed")
    }
  });
}

export default DeleteFromCart

