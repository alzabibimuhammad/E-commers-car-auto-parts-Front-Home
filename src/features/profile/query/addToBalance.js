
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showSuccesToast } from '../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../utiltis/showErrorToast';
import AddToBalanceApi from '../api/addToBalanceApi';

const AddToBalanceQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddToBalanceApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Profile");
      showSuccesToast("","success")
    },
    onError:_ => {
      queryClient.invalidateQueries("Profile");
      ShowErrorToast("Error")
    }
  });
}

export default AddToBalanceQuery

