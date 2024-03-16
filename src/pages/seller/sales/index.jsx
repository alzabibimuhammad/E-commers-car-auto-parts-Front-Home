import { useContext } from "react";
import SalesForSellerTable from "../../../features/seller/sales/components/dataGrid";
import { UserContext } from "../../../components/Layout/Layout";
import GetAllSales from "../../../features/seller/sales/hooks/query/GetAllSales";
import { Box, CircularProgress } from "@mui/material";


const SalesForSeller = () => {
  
  const user = useContext(UserContext)
  
  const {data} = GetAllSales(user?.id)
  const rows = data?.data

  const total = rows?.reduce((acc, curr) => acc + curr.totalprice, 0);

  

  return <>
  {rows ?
  <SalesForSellerTable rows={rows} total={total||0} />
  :
  <Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
  <CircularProgress />
</Box>}
  </>

};

export default SalesForSeller;
