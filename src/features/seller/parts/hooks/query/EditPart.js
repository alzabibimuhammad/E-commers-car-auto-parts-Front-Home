
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {showSuccesToast} from '../../../../../utiltis/toastSecces'
import {ShowErrorToast} from '../../../../../utiltis/showErrorToast'
import EditPartApi from '../../api/EditPartApi';

const EditPart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    
    mutationFn:EditPartApi,

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

export default EditPart

