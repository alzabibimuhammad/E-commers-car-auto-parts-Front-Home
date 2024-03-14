import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import AuthUser from "../../../../components/AuthUser";
import { Box, Button, Card, CardContent, Container, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import img from '../../../../assets/all-images/ava-4.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ReportIcon from '@mui/icons-material/Report';
import InfoIcon from '@mui/icons-material/Info';
import AddToCart from "../../query/AddToCart";
import DeleteFromCart from "../../../cart/query/DeleteFromCart";

const PartCard = ({Data,type}) => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const [Amount , setAmount] = useState([])
    const navigate = useNavigate();

    const { mutate: AddToCartApi, isLoading } = AddToCart();
    
    const { mutate: DeleteFromCartApi } = DeleteFromCart();
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleCloseAnchor = () => {
        setAnchorEl(null)
    }
    const handleAmount = (partID, amount) => {
        const index = Amount.findIndex(element => element.partID === partID);
        if (index !== -1) {
            setAmount(prevAmount => [
                ...prevAmount.slice(0, index), 
                { partID: partID, amount: amount }, 
                ...prevAmount.slice(index + 1) 
            ]);
        } else {
            setAmount(prevAmount => [
                ...prevAmount,
                { partID: partID, amount: amount }
            ]);
        }

    };

    const handleAddToCart=partID => {
        
        const index = Amount.findIndex(element => element.partID === partID);
        
        let customer_id ;
        if(sessionStorage.user)
            customer_id = JSON?.parse(sessionStorage?.user)?.id

        if(index!=-1)
            if(customer_id){
                Amount[index].customer_id = customer_id
                AddToCartApi(Amount[index])
            }
            else{

                navigate('/login')
            }
        

    }
    const handleDelete=partID=>{
        DeleteFromCartApi(partID)
    }

    return (
        <Grid margin={{ sm: 0, md: 0, xs: 0 }} spacing={1} sx={{ overflowX:'hidden' }} container>
            {Data?.map((part,index)=>(
                <Grid item sm={3} xs={11} md={3}  >
                <Card sx={{borderRadius:'12px' ,backgroundColor: 'rgb(250,250,250)', width: '100%', height: '470px' }}>
                    <CardContent>

                        <Stack spacing={1} >
                            <Box sx={{ width: '100%', height: '100%', marginLeft: '2%', display: 'flex' }}>
                                <Box sx={{ width:'100%',height:'100%' }} display={'flex'} justifyContent={'center'} >
                                    <img style={{ width: '250px', height: '200px    ' }} src={process.env.REACT_APP_API_KEY+'/'+part.image} alt="ss" />
                                </Box>
                                <Box sx={{ position:'relative',left:10 }}>
                                    <IconButton
                                        aria-label='more'
                                        id='long-button'
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup='true'
                                        sx={{ padding: 0, margin: 0 }}
                                        onClick={event => handleClick(event)}
                                    >
                                        <MoreVertIcon />
                                    </IconButton>
                                    <Menu
                                        id='long-menu'
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button'
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleCloseAnchor}
                                        PaperProps={{
                                            style: {
                                                maxHeight: 162 * 4.5,
                                                width: '208px',
                                                boxShadow: 'none'
                                            }
                                        }}
                                    >
                                        <MenuItem sx={{ padding: '0', color: '#3F4458' }} >
                                            <Box style={{ textDecoration: 'none' }}>
                                                <IconButton>
                                                    <InfoIcon variant='contained' sx={{ color: '#3F4458' }} size='small' />
                                                </IconButton>
                                                <span style={{ color: '#3F4458' }}>Details</span>
                                            </Box>
                                        </MenuItem>
                                        <MenuItem sx={{ padding: '0', color: '#3F4458' }} >
                                            <Box style={{ textDecoration: 'none' }}>
                                                <IconButton>
                                                    <ReportIcon variant='contained' sx={{ color: '#3F4458' }} size='small' />
                                                </IconButton>
                                                <span style={{ color: '#3F4458' }}>Report</span>
                                            </Box>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </Box>
                            <Box sx={{ width: '100%', marginTop: '10px' }} display={'flex'} justifyContent={'center'} >
                                <Stack>
                                    <Typography variant="h4" >{part.name}</Typography>
                                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                                        <Typography variant="h10" >{part.price} l.s</Typography>
                                    </Box>
                                </Stack>
                            </Box>
                            <Box>
                                <Typography variant="h7" >{part.type}({part.model_id})</Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} >

                                <Box sx={{ display: 'flex' }} >
                                    <Typography variant="h7" sx={{ color: 'orange' }} >Category:</Typography>
                                    <Typography variant="h7" >{part.category.name}</Typography>
                                </Box>

                                <Box sx={{ display: 'flex' }} >
                                    <Typography variant="h7" sx={{ color: 'orange' }} >Amount:</Typography>
                                    <Typography variant="h7" >{part.amount}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex' }} >
                                    <Typography variant="h7" sx={{ color: 'orange' }} >Seller:</Typography>
                                    <Typography variant="h7" >{part.seller_name}</Typography>
                                </Box>
                            </Box>
                            <Stack spacing={1} sx={{ width: '100%' }} >
                            {type =='part'?
                            <>
                                <TextField name="amount" onChange={(e)=>handleAmount(part.id,e.target.value)} label="Amount" type="number" required size="small" fullWidth />
                                <Button onClick={()=>handleAddToCart(part.id)} sx={{ backgroundColor: '#000c6bd0', color: '#fff', ':hover': { backgroundColor: '#000a1bd0', color: '#fff' } }}  >Add To Cart</Button>
                                </>

                            :
                            <Box sx={{ height:'100px',display:'flex',alignItems:'center' }} >
                                <Button onClick={()=>handleDelete(part.id)} sx={{ width:'100%',backgroundColor: '#000c6bd0', color: '#fff', ':hover': { backgroundColor: '#00011bd0', color: '#fff' } }}  >Delete</Button>
                            </Box>
                            }
                            </Stack>

                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            
            ))}
            
        </Grid>

    );
};

export default PartCard;
