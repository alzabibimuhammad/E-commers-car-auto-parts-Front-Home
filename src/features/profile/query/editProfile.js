
import { useMutation, useQueryClient } from '@tanstack/react-query';
import EditProfileApi from '../api/edit';
import { showSuccesToast } from '../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../utiltis/showErrorToast';

const EditProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditProfileApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Cart");
      showSuccesToast("","success")
    },
    onError:(data) => {
      ShowErrorToast( data?.response?.data[0])
    }
  });
}

export default EditProfile

