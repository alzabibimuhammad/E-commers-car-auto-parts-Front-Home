import React from 'react'
import SellerPartsTable from '../features/seller/parts/component/DataGrid'
import GetProfile from '../features/profile/query/getProfile'
import GetAllSellerParts from '../features/seller/parts/hooks/query/GetAllSellerParts'
import { Box, CircularProgress } from '@mui/material'

export default function SellerParts() {
  const { data } = GetProfile()
  const user = data?.data

  const { data: Data } = GetAllSellerParts(user?.id)
  const rows = Data?.data

  return (
    <>
      {rows ?
        <SellerPartsTable rows={rows} user_id={user?.id} />
        :
        <Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <CircularProgress />
        </Box>}
    </>
  )
}
