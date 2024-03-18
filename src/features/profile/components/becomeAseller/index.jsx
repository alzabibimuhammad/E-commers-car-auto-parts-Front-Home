import React from 'react'
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
import BecomeAsellerQuery from '../../query/BecomeAsellerQuery';
export default function BecomeAseller({open,setIsopen,Data}) {
    const {mutate:BecomeAsellerApi} = BecomeAsellerQuery()
    
    const handleBecomeAseller = _=>{
        if(Data.utype === "1"){
            Data.password = "500"
            Data.utype = "2"
            BecomeAsellerApi(Data)
            setIsopen(false)
        }
        else
            return
    }
return (
    <Dialog
    open={open}
    onClose={(_) => setIsopen(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <Box sx={{ width: "500px" }}>
      <DialogTitle sx={{ fontSize:'18px' }} >Are you sure you want to send a request to become a seller in our site ?</DialogTitle>
      <DialogContent>
        <Stack spacing={1.5}>
        
          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            onClick={handleBecomeAseller}
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
              Submit
            </Button>
          </Box>
        </Stack>
      </DialogContent>
    </Box>
  </Dialog>
  )
}
