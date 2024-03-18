
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AddPartApi from '../api/AddPartApi';
import { showSuccesToast } from '../../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../../utiltis/showErrorToast';

const AddPart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddPartApi,
    onSuccess: _ => {
      queryClient.invalidateQueries("Seller");
      showSuccesToast("","success")
    },
    onError:_ => {
      queryClient.invalidateQueries("Seller");
      ShowErrorToast("Error")
    }
  });
}

export default AddPart

