import React from 'react'
import EditProfileCard from '../../../features/profile/components/edit'
import GetProfile from '../../../features/profile/query/getProfile'
import { Box, CircularProgress } from '@mui/material'

export default function EditProfile() {
  
  const {data} = GetProfile()
  const Data = data?.data
  return (
  
    <>
    {Data?<EditProfileCard Data = {Data}/>:
    <Box sx={{ height:"50vh",display:'flex',justifyContent:'center',alignItems:'center' }}  > 
      <CircularProgress/>
    </Box>
    }
    </>
    )
}
