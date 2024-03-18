
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showSuccesToast } from '../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../utiltis/showErrorToast';
import BecomeAsellerApi from '../api/BecomeASellerApi';

const BecomeAsellerQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:BecomeAsellerApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Profile");
      showSuccesToast("","success")
    },
    onError:error => {
      queryClient.invalidateQueries("Profile");
      ShowErrorToast("Error",error?.response?.data)
    }
  });
}

export default BecomeAsellerQuery

