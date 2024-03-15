import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteAllParts from '../../../hooks/query/DeleteAllParts';

export default function AlertDialogDeleteAllParts({open,setDeleteOpen,user_id}) {

    const { mutate: DeleteAllPartsApi } = DeleteAllParts()

    const handleDelete = _ =>{
        DeleteAllPartsApi(user_id)
        handleClose()
    }



    const handleClose = () => {
        setDeleteOpen(false);
    };

    return (
        <React.Fragment>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Are you sure to delete your parts?
            </DialogTitle>
            <DialogActions>
            <Button onClick={handleClose} sx={{ backgroundColor:'#000D6B',color:'#fff',':hover':{backgroundColor:'#000D6B',color:'#fff'} }} autoFocus >Cancel</Button>
            <Button onClick={handleDelete} sx={{ backgroundColor:'red',color:'#fff',':hover':{backgroundColor:'red',color:'#fff'} }}  >
                Delete
            </Button>
            </DialogActions>
        </Dialog>
        </React.Fragment>
    );
}
