
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UnDeletePartApi from '../../api/UnDeletePartApi';
import { ShowErrorToast } from '../../../../../utiltis/showErrorToast';
import { showSuccesToast } from '../../../../../utiltis/toastSecces';

const UnDeletePart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:UnDeletePartApi,
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

export default UnDeletePart

