
import React, { useMemo } from 'react'

export default function UseGetSalesColunms() {
  return useMemo(_=>   [
    {
      field: "id",
      headerName: "ID",
      valueGetter: params => params.row.id,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "part_name",
      headerName: "Part Name",
      flex: 1,
    },
    {
      field: "customer_id",
      headerName: "Customer ID",
      flex: 1,
    },
    {
        field: "customer_name",
        headerName: "Customer",
        flex: 1,
    },
    {
      field: "customer_email",
      headerName: "Customer Email",
      flex: 1,
    },
    {
      field: "model",
      headerName: "Model",
      flex: 1
    },
    {
      field: "category_name",
      headerName: "Category Name",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 1,
    },
    {
        field: "price",
        headerName: "Price",
        flex: 1,
    },
    {
        field: "totalprice",
        headerName: "Total Price",
        flex: 1,
    },

    {
        field: "created_at",
        headerName: "Saled At",
        flex: 1,
    },

  
])
}
