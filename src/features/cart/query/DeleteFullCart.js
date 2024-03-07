
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showSuccesToast } from '../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../utiltis/showErrorToast';
import DeleteFullCartApi from '../api/DeleteFullCartApi';

const DeleteFullCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeleteFullCartApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Cart");
      showSuccesToast("","Deleted")
    },
    onError:(data) =>{
        ShowErrorToast("","Delete failed")
    }
  });
}

export default DeleteFullCart

