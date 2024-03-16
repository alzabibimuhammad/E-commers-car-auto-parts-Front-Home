


import SellerDeletedPartsTable from "../../../../features/seller/deletedParts/components/dataGrid";

import React, { useContext } from "react";
import GetAllDeletedParts from "../../../../features/seller/deletedParts/hooks/query/GetAllDeletedParts";
import { UserContext } from "../../../../components/Layout/Layout";
import { Box, CircularProgress } from "@mui/material";


const SellerDeletedParts = () => {

  const user = useContext(UserContext)
  const {data} = GetAllDeletedParts(user?.id)
  const rows = data?.data
  
  return<>
  {rows ? 
  <SellerDeletedPartsTable rows={rows||[]}/>
  :<Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
  <CircularProgress />
</Box>}
  </>
}

export default SellerDeletedParts