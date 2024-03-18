import { Avatar, Button, Card, CardContent, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlertDialogDelete from '../delete'
import AddToBalanceDialog from '../addTobalance'
import BecomeAseller from '../becomeAseller'

export default function ProfileCard({ Data }) {
    const naveigate = useNavigate()

    const [deleteOpen, setDeleteOpen] = useState(false)
    const [isBalance, setIsBalance] = useState(false)
    const [bseller, setBseller] = useState(false)

    const isSeller = Data?.utype ==='2'; 

    const handleEdit = _ => {
        naveigate('/EditProfile')
    }

    return (
        <Grid container marginBottom={6} marginTop={3} sx={{ marginLeft: { sm: '15%', md: '15%', xs: '5%' } }}  >
            <Grid item sm={8} xs={11} md={8} >
                <Card sx={{ height: '200px', backgroundColor: '#000D6B' }}  >
                    <CardContent>
                        <Stack marginLeft={{ sm: 6, md: 6, xs: 1 }} direction={'row'} alignItems={'center'} spacing={{ sm: 3, md: 3, xs: 1 }} >
                            <Avatar src={process.env.REACT_APP_API_KEY + '/' + Data?.image} sx={{ width: 150, height: 150 }} />
                            <Stack sx={{ color: '#fff' }} >
                                <Typography variant='h5'  >{Data?.name}</Typography>
                                <Typography variant='h7' >Balance : {Data?.financial_balance}</Typography>
                                {Data?.utype == '2' && <Typography variant='h7' >Profit:{Data?.profits}</Typography>}
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={8} xs={11} md={8} >
                <Card sx={{ height: '600px' }} >
                    <CardContent>
                        <Stack spacing={3} >
                            <Stack spacing={1}>
                                <Typography>Information</Typography>
                                <Divider />
                            </Stack>

                            <Grid container>
                                <Grid item sm={6} xs={6} md={6}>
                                    <Typography>ID</Typography>
                                    <Typography>{Data?.id}</Typography>
                                </Grid>
                                <Grid item sm={6} xs={6} md={6}>
                                    <Typography>Email</Typography>
                                    <Typography>{Data?.email}</Typography>
                                </Grid>
                            </Grid>

                            <Stack spacing={1}>
                                <Typography>Accommodation</Typography>
                                <Divider />
                            </Stack>
                            <Grid container>
                                <Grid item sm={6} xs={6} md={6}>
                                    <Typography>Address</Typography>
                                    <Typography>{Data?.address}</Typography>
                                    <Stack width={'31%'} spacing={1} marginTop={5} >
                                        <Button onClick={() => setDeleteOpen(true)} sx={{ backgroundColor: 'red', color: '#fff', ':hover': { backgroundColor: 'red', color: '#fff' } }}  >Delete Profile</Button>
                                        {!isSeller?
                                            <Button onClick={_=>setBseller(true)} sx={{ backgroundColor: '#000D6B', color: '#fff', ':hover': { backgroundColor: '#000D6B', color: '#fff' } }}  >Become A Seller</Button>
                                        :
                                            <Button onClick={_=>setIsBalance(true)} sx={{ backgroundColor: '#000D6B', color: '#fff', ':hover': { backgroundColor: '#000D6B', color: '#fff' } }}  >Add to Balance</Button>
                                        
                                        }
                                        </Stack>
                                </Grid>
                                <Grid item sm={6} xs={6} md={6}>
                                    <Typography>Phone</Typography>
                                    <Typography marginBottom={5} >{Data?.phone}</Typography>
                                    <Button onClick={handleEdit} sx={{ backgroundColor: 'green', color: '#fff', ':hover': { backgroundColor: 'green', color: '#fff' } }}  >Edit Profile</Button>
                                </Grid>
                            </Grid>
                        </Stack>


                    </CardContent>
                </Card>
            </Grid>
            {deleteOpen && <AlertDialogDelete open={deleteOpen} setDeleteOpen={setDeleteOpen} />}
            {isBalance && <AddToBalanceDialog open={isBalance} setIsopen={setIsBalance} Data={Data} />}
            {bseller && <BecomeAseller open={bseller} setIsopen={setBseller} Data={Data} />}
            
        </Grid>
    )
}
