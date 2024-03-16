
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showSuccesToast } from '../../../../../utiltis/toastSecces';
import UndeleteAllPartsApi from '../../api/UndeleteAllPartsApi';
import { ShowErrorToast } from '../../../../../utiltis/showErrorToast';

const UnDeleteAllParts = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:UndeleteAllPartsApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("DeletedParts");
      showSuccesToast("","success")
    },
    onError:_ => {
      queryClient.invalidateQueries("DeletedParts");
      ShowErrorToast("Change user name")
    }
  });
}

export default UnDeleteAllParts

