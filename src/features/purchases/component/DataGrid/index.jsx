import React from 'react'
import usePurshesColunm from '../../hooks/usePurshesColunm'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

export default function PurchaseTable({rows}) {
    const columns = usePurshesColunm()
    return (
         <DataGrid  
         
         components={{ Toolbar: GridToolbar }}
         rows={rows} columns={columns} />
  )
}
