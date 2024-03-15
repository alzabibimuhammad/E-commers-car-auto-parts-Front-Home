
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DeleteAllPartsApi from '../../api/DeleteAllPartsApi';

import {showSuccesToast} from '../../../../../utiltis/toastSecces'
import {ShowErrorToast} from '../../../../../utiltis/showErrorToast'

const DeleteAllParts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    
    mutationFn:DeleteAllPartsApi,

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

export default DeleteAllParts

