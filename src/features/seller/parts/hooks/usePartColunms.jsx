import { Avatar, Box, Stack, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import AlertDialogDeletePart from '../component/dialogs/DeletePart';
import DrawerEditPart from '../component/drawerEdit';

export default function usePartColunms() {

  const [isDelete,setIsDelete] = useState(false)
  const [isEdit,setIsEdit] = useState(false)
  const [idPart,setIdPart] = useState()

  const handleDelete = params=>{
    setIdPart(params.row.id)
    setIsDelete(true)
  }
  const handleEdit =params=>{
    setIdPart(params)
    setIsEdit(true)
  }

  return useMemo(_=>
    [
      {
        field: "image",
        flex:0.5,
        renderCell:params=>(
          <Avatar sx={{ width:'45px',height:'45px' }} src={process.env.REACT_APP_API_KEY+'/'+params?.row?.image} alt='N' />
        )
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
          renderCell:params=>{
            const date = params?.row?.created_at?.split('T')[0]
            const time = params?.row?.created_at?.split('T')[1].split('.')[0]
            return <Stack >
                <p style={{ padding:0,margin:0 }} >{date}</p>
                <p style={{ padding:0,margin:0 }} >{time}</p> 
            </Stack>
          }
          
      },
      {
          field: 'delete',
          headerName: 'Delete',
          flex:1,
          renderCell: (params) => {
            
            return (
              <>
                <Stack direction={'row'} spacing={1} >
                    <Box onClick={()=>{handleEdit(params)}}>
                      <ModeEditIcon fontSize='small' sx={{ color:'rgb(255,180,100)', cursor:'pointer' }} />
                    </Box>
  
                    <Box onClick={()=>{handleDelete(params)}}>
                    <DeleteForeverIcon  fontSize='small' sx={{ cursor:'pointer',color:'red' }}/>
                    </Box>
                    <InfoIcon fontSize='small' sx={{ cursor:'pointer' }}/>


                </Stack>
                {isDelete&&<AlertDialogDeletePart open={isDelete} setDeleteOpen={setIsDelete} id={idPart}  />}
                {isEdit&&<DrawerEditPart open={isEdit} setOpen={setIsEdit} part={idPart?.row}  />}

                </>
            );
          },
        },
      
  ])
}
