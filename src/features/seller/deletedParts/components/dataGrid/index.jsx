import { Box} from "@mui/material";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { useState, useEffect, useContext } from "react";
import React from 'react'

import useGetDeletedPartsColunms from "../../hooks/useGetDeletedPartsColunms";
import UnDeleteAllPartsDialog from "../dialogs/undeleteAllparts";

export default function SellerDeletePartsTable({rows}) {

  const [IsDeleteAllParts, setIsDeleteAllParts] = useState(false)

  const columns = useGetDeletedPartsColunms()




    const UnDeleteAllParts=()=>{
    //   if (window.confirm("Are you sure you want to Delete?")) {
    //   http.get('/UnDeleteAllParts/'+user.id)  
    // }
    }



  return (
    <Box m="20px">
      <button className="btn" style={{float:'right', backgroundColor:'orange' }} onClick={_=>setIsDeleteAllParts(true)}>Un Delete All Parts</button><br/>
      {IsDeleteAllParts ? <UnDeleteAllPartsDialog open={IsDeleteAllParts} setDeleteOpen={setIsDeleteAllParts} /> : null}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
          "& .MuiCheckbox-root": {
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          },
        }}
      >
        <DataGrid 
         rows={rows} 
         columns={columns}
         components={{ Toolbar: GridToolbar }}

         getRowId={(row) => row.id} />
      </Box>
    </Box>
  );
}


