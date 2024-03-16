import { Box } from "@mui/material";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { useState, useEffect, useContext } from "react";
import UseGetSalesColunms from "../../hooks/useGetSalesColunms";

// import { UserContext } from "../../../components/Layout/Layout";

export default function SalesForSellerTable ({rows,total}) {


  const columns = UseGetSalesColunms()



  return (
    <Box m="20px">
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
    <h3>Total Sales Mony:${total}.00</h3>

        <DataGrid 
         rows={rows||[]} 
         columns={columns}
         components={{ Toolbar: GridToolbar }}

         getRowId={(row) => row.id} />
      </Box>
    </Box>
  );
};

