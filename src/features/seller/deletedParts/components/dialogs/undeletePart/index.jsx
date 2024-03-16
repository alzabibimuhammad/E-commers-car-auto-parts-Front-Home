import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React, { useContext } from "react";
import UnDeleteAllParts from "../../../hooks/query/unDeleteAllParts";
import { UserContext } from "../../../../../../components/Layout/Layout";
import UnDeletePart from "../../../hooks/query/unDeletePart";

export default function UnDeletePartDialog({open,setDeleteOpen,id}) {

  const { mutate:UndeletePartApi} = UnDeletePart() 

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
          Are you sure to undelete your part?
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
                { 
                UndeletePartApi(id)
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
