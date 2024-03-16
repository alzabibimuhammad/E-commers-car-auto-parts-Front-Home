import React, { useMemo, useState } from 'react'
import UnDeletePartDialog from '../components/dialogs/undeletePart';

export default function useGetDeletedPartsColunms() {
  const [isDelete, setIsDelete] = useState(false)
  const [id, setId] = useState()

  return useMemo(_ => [
    {
      field: "id",
      headerName: "ID",
      valueGetter: params => params.row.id,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "name",
      headerName: "Part Name",
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
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "deleted_at",
      headerName: "Deleted At",
      flex: 1,
    },
    {
      field: 'delete',
      headerName: 'Delete',
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <>
            <button className="btn" onClick={_ => {
              setId(params.row.id)
              setIsDelete(true)
            }} >UnDelete</button>
            {isDelete ? <UnDeletePartDialog open={isDelete} setDeleteOpen={setIsDelete} id={id} /> : null}

          </>
        );
      },
    }

  ])
}
