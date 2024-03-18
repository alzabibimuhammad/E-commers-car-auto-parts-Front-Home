import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddToBalanceQuery from "../../query/addToBalance";

export default function AddToBalanceDialog({ open, setIsopen,Data }) {
  
  const [mony, setMony] = useState(null);
  const [error, setError] = useState(false);
  
 const {mutate:AddToBalanceApi} = AddToBalanceQuery()

  const handleAddToBalance = (_) => {
    if(mony < 0){
        setError("you entered a negative number")
        return
    }
    else if (Data?.profits < mony ) { 
        setError("you entered a bigger number than your profit")
        return
    }
    else{
        setError(false)
        AddToBalanceApi({id:Data?.id,mony:mony})
        return
    }
  };

  return (
    <Dialog
      open={open}
      onClose={(_) => setIsopen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box sx={{ width: "500px" }}>
        <DialogTitle>Add To Balance</DialogTitle>
        <DialogContent>
          <Stack spacing={1.5}>
            <Typography> Your Profit is : {Data?.profits}$</Typography>
            <TextField
                value={mony}
              required
              type="number"
              size="small"
              sx={{ width: "400px" }}
              label="Add to balance"
              onChange={(e) => setMony(e.target.value)}
              error={Boolean(error)}
              helperText={error}

            />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                    
                  onClick={_=>setIsopen(false)}
                  sx={{
                    backgroundColor: "#000D6B",
                    color: "#fff",
                    ":hover": {
                      backgroundColor: "rgb(200,0,200)",
                      color: "#fff",
                    },
                  }}
                >
                  Cancel
                </Button>
              <Button
                onClick={handleAddToBalance}
                sx={{
                    marginLeft:1,
                  backgroundColor: "#000D6B",
                  color: "#fff",
                  ":hover": {
                    backgroundColor: "rgb(200,0,200)",
                    color: "#fff",
                  },
                }}
              >
                Add
              </Button>
            </Box>
          </Stack>
        </DialogContent>
      </Box>
    </Dialog>
  );
}
