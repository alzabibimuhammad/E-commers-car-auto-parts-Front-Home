import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useContext } from "react";
import UnDeleteAllParts from "../../../hooks/query/unDeleteAllParts";
import { UserContext } from "../../../../../../components/Layout/Layout";

export default function UnDeleteAllPartsDialog({open,setDeleteOpen}) {

  const { mutate:UndeleteAllPartsApi} = UnDeleteAllParts() 
  const user = useContext(UserContext)
//   const handleDelete = _ => {
//    UndeleteAllPartsApi(user?.id)
//   };

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
          Are you sure to undelete your parts?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: "#000D6B",
              color: "#fff",
              ":hover": { backgroundColor: "#000D6B", color: "#fff" },
            }}
            autoFocus
          >
            Cancel
          </Button>
          <Button
            onClick={_=>
                {UndeleteAllPartsApi(user?.id) 
                setDeleteOpen(false)
                }
            }
            sx={{
              backgroundColor: "red",
              color: "#fff",
              ":hover": { backgroundColor: "red", color: "#fff" },
            }}
          >
            UnDelete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
