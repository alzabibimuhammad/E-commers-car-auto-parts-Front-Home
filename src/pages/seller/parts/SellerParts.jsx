import React, { useContext } from 'react'
import SellerPartsTable from '../../../features/seller/parts/component/DataGrid'
import GetAllSellerParts from '../../../features/seller/parts/hooks/query/GetAllSellerParts'
import { Box, CircularProgress } from '@mui/material'
import { UserContext } from '../../../components/Layout/Layout'

export default function SellerParts() {

  const user = useContext(UserContext);

  const { data: Data } = GetAllSellerParts(user?.id)
  const rows = Data?.data


  return (
    <>
      {rows ?
        <SellerPartsTable rows={rows} />
        :
        <Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <CircularProgress />
        </Box>}
    </>
  )
}
