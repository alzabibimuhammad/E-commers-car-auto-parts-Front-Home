
import { useMutation, useQueryClient } from '@tanstack/react-query';
import EditProfileApi from '../api/edit';
import { showSuccesToast } from '../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../utiltis/showErrorToast';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()

  return useMutation({
    mutationFn:EditProfileApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Profile");
      showSuccesToast("","success")
      navigate('/userProfile')
    },
    onError:_ => {
      queryClient.invalidateQueries("Profile");
      ShowErrorToast("Change user name")
    }
  });
}

export default EditProfile

