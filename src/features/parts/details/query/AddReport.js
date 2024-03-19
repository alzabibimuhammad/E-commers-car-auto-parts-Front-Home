
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AddReportApi from '../api/AddReportApi';
import { showSuccesToast } from '../../../../utiltis/toastSecces';
import { ShowErrorToast } from '../../../../utiltis/showErrorToast';

export default function AddReport ()  {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddReportApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Details");
      showSuccesToast("","Added")
    },
    onError:(data) =>{
        queryClient.invalidateQueries("Details");
        ShowErrorToast("","Add failed")
    }
  });
}



