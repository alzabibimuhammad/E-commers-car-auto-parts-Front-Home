import { useMemo } from 'react'

export default function usePurshesColunm() {

    return useMemo( _ => [
        {
        field: "id",
        headerName: "ID",
        valueGetter: params => params.row.id,
        type: "number",
        headerAlign: "left",
        align: "left",
        },
        {
        field: "customer_name",
        headerName: "Customer",
        flex: 1,
        },
        {
        field: "part_name",
        headerName: "Part",
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
        field: "seller_id",
        headerName: "Seller ID",
        flex: 1,
        },
        {
        field: "seller_name",
        headerName: "Seller",
        flex: 1,
        },
        {
            field: "seller_email",
            headerName: "Seller Email",
            flex: 1,
        },
        {
            field: "totalprice",
            headerName: "Total Price",
            flex: 1,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 1,
        },
        {
            field: "created_at",
            headerName: "Date",
            flex: 1,
        },
    ])
}


