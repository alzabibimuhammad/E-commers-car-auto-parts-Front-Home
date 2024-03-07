import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import { useNavigate } from 'react-router-dom';
import AuthUser from "../../components/AuthUser";
import PartCard from "../../features/parts/components/partCard";
import { Box, CircularProgress, Stack } from "@mui/material";
import GetCart from "../../features/cart/query/GetCart";
import DeleteFullCart from "../../features/cart/query/DeleteFullCart";
import Buy from "../../features/cart/query/Buy";



const Cart = () => {

  const { mutate: DeleteFullCartApi } = DeleteFullCart();

  const {mutate: BuyApi} = Buy();
  
  
  const {data} = GetCart()
  const Data = data?.data
 


  const handleBuy = _ => {
    BuyApi()
  };


  
  const DeleteAll=()=>{
    if (window.confirm("Are you sure you want to delete?")) {
      DeleteFullCartApi()
    }

  }


  return (
          <>
          {Data?
          <>
            <PartCard Data={Data.cart} />
          <h3>Final Price: ${Data.total}.00</h3>

          <Stack marginBottom={5} spacing={1} direction={'row'} sx={{ width:'1005',justifyContent:'center' }}>
            <Button type="submit" name="buy" style={{ width:'600px' }} onClick={handleBuy} >Buy</Button>
            <Button  style={{ width:'600px' }} onClick={DeleteAll} > Deleted All </Button>
        </Stack>
        </>
        :
        <Box
        sx={{
          display: "flex",
          height: "50vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>}
      </>
  );
};

export default Cart;
