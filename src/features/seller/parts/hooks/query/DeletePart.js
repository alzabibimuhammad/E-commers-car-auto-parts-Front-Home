
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {showSuccesToast} from '../../../../../utiltis/toastSecces'
import {ShowErrorToast} from '../../../../../utiltis/showErrorToast'
import DeletePartApi from '../../api/DeletePartApi';

const DeletePart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    
    mutationFn:DeletePartApi,

    onSuccess: (data) => {
      queryClient.invalidateQueries("Seller");
      showSuccesToast("","success")
    },
    onError:_ => {
      queryClient.invalidateQueries("Seller");
      ShowErrorToast("Error")
    }
  });
}

export default DeletePart

