import { Box, Stack } from '@mui/material';
import React, { useMemo, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import AlertDialogDeletePart from '../component/dialogs/DeletePart';

export default function usePartColunms() {

  const [isDelete,setIsDelete] = useState(false)
  const [idPart,setIdPart] = useState()

  const handleDelete = params=>{
    setIdPart(params.row.id)
    setIsDelete(true)
  }

  return useMemo(_=>
    [
      {
        field: "id",
        headerName: "ID",
        flex:1,
        valueGetter: params => params.row.id,
      },
      
      {
        field: "name",
        headerName: "Part Name",
        flex:1,
        
      },
      {
        field: "model",
        headerName: "Model",
        flex:1,
        
      },
      {
        field: "category_name",
        headerName: "Category Name",
        
        flex:1,
      },
      {
        field: "amount",
        headerName: "Amount",
        flex:1,
        
      },
      {
          field: "price",
          headerName: "Price",
          flex:1,
          
      },
      {
          field: "description",
          headerName: "Description",
          flex:1,
          
        },
      {
          field: "created_at",
          headerName: "Created At",
          flex:1,
          
      },
      {
          field: 'delete',
          headerName: 'Delete',
          flex:1,
          renderCell: (params) => {
            
            return (
              <>
                <Stack direction={'row'} spacing={1} >
                    <ModeEditIcon fontSize='small' sx={{ color:'rgb(255,180,100)', cursor:'pointer' }} />
                    <Box onClick={()=>{handleDelete(params)}}>
                    <DeleteForeverIcon  fontSize='small' sx={{ cursor:'pointer',color:'red' }}/>
                    </Box>
                    <InfoIcon fontSize='small' sx={{ cursor:'pointer' }}/>


                </Stack>
                {isDelete&&<AlertDialogDeletePart open={isDelete} setDeleteOpen={setIsDelete} id={idPart}  />}

                </>
            );
          },
        },
      
  ])
}
