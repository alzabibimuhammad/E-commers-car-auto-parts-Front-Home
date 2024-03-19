import React, { useContext, useEffect, useState } from 'react'
import DetailsPage from '../../features/parts/details/components/page'
import GetPartsDetailsApi from '../../features/parts/details/api/GetPartDetailsApi'
import { useParams } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import GetPartsDetails from '../../features/parts/details/query/getDetails';
import { UserContext } from '../../components/Layout/Layout';

export default function PartDetails() {
    const { id } = useParams(); // Destructure the ID from `useParams`
    const {data} = GetPartsDetails(id)
    const part = data?.data
 
    const user = useContext(UserContext)

  return (  


    <>
    {part&&user?
      
      <DetailsPage part={part} user={user} />
    :        <Box
    sx={{
      display: "flex",
      height: "50vh",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>}
    </>
  )
}
