import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";


import { styled } from '@mui/material/styles';


import { useFormik } from "formik";
import { UserContext } from "../../../../../components/Layout/Layout";
import AddReport from "../../query/AddReport";

export default function DetailsPage({ part,user }) {
console.log("🚀 ~ DetailsPage ~ part:", part)

    const [report, setReport] = useState(false)

    

    const { mutate: AddReportApi } = AddReport()

    const defaulValues = {
        description: "",
        customer_id: user?.id,
        seller_id: part?.seller_id,
        part_id: part?.id,

    }

    const formik = useFormik({
        initialValues: defaulValues,
        onSubmit: (values) => {
            AddReportApi(values)
            setReport(false)
        },
    });

    const Typo = styled('p')(({ theme }) => ({
        color: '#000D6B',
        padding:0,
        margin:0,
        fontweight:700,
        fontSize: '16px',
    }));

    const Typo2 = styled('p')(({ theme }) => ({
        color: '#000',
        padding:0,
        margin:0,
        fontWeight:700,
        fontSize: '16px',
        marginLeft:'3px',
    }));

    const Div = styled('div')(({ theme }) => ({
        padding:0,
        margin:0,
        display:'flex',
        alignItems:'center',
    }));

        

    console.log('hi',part?.reports > 0);

    return (
        <Grid
            mt={2}
            mb={2}
            container
            height={{ sm: "70vh", md: "70vh", lg: "70vh", xs: "100vh" }}
            direction={"row"}
            justifyContent={"center"}

        >
            <Grid item height={"100%"} sm={8} md={8} xs={12} lg={8}>
                <Card sx={{ backgroundColor: "rgb(250,250,250)", height: "100%" }}>
                    <CardContent>
                        <Grid container sx={{ height: "70vh" }}>
                            <Grid item sm={7} md={7} xs={12} lg={7}>
                                <Stack sx={{ height: "100%" }} spacing={1}>
                                    <Card
                                        sx={{
                                            height: { sm: "50%", md: "50%", lg: "50%", xs: "100%" },
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                variant="h2"
                                                component="h2"
                                                sx={{ fontSize: "1.2em", fontWeight: "bold" }}
                                                pb={0}
                                            >
                                                Information
                                            </Typography>
                                            <Divider />
                                            <Grid mt={1} container sx={{ height: "100%" }}>
                                                <Grid item sm={6} md={6} xs={12} lg={6}>
                                                <Div>
                                                        <Typo>ID:</Typo>
                                                        <Typo2>{part?.id}</Typo2>
                                                    </Div>
                                                    <Div>
                                                        <Typo>Name:</Typo>
                                                        <Typo2>{part?.name}</Typo2>
                                                    </Div>
                                                    <Div>
                                                        <Typo>Amount:</Typo>
                                                        {part?.amount < 5 ?
                                                            <Typo2 style={{ color: 'red' }} > {part?.amount}</Typo2>

                                                            :
                                                            <Typo2  > {part?.amount}</Typo2>

                                                        }

                                                    </Div>

                                                    <Div>
                                                        <Div>
                                                            <Typo style={{ color: 'orange' }} >Price</Typo>
                                                            <Typo  >:</Typo>
                                                        </Div>
                                                        <Typo2>{part?.price}$</Typo2>

                                                    </Div>
                                                </Grid>
                                                <Box
                                                    sx={{
                                                        display: {
                                                            sm: "block",
                                                            md: "block",
                                                            lg: "block",
                                                            xs: "none",
                                                        },
                                                        position: "absolute",
                                                        top: "293px",
                                                        left: "540px",
                                                        transform: "translateX(-50%)",
                                                        height: "29.4vh",
                                                        borderLeft: "1px solid #ccc",
                                                    }}
                                                />

                                                <Grid item sm={6} md={6} xs={12} lg={6}>
                                                    <Div>
                                                        <Typo>Seller:</Typo>
                                                        <Typo2> {part?.seller ? part?.seller?.name : '---'}</Typo2>

                                                    </Div>
                                                    <Div>
                                                        <Typo>Model:</Typo>
                                                        <Typo2> {part?.model}</Typo2>

                                                    </Div>
                                                    <Div>
                                                        <Typo>Category:</Typo>
                                                        <Typo2> {part?.category?.name}</Typo2>

                                                    </Div>
                                                    <Div>
                                                        <Typo>Number of Report:</Typo>
                                                        <Typo2 style={{ color:part?.reports > 0 && 'red' }} > {part?.reports}</Typo2>

                                                    </Div>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ height: "30%", overflowY: 'auto' }}>
                                        <CardContent>
                                            <Typography
                                                variant="h2"
                                                component="h2"
                                                sx={{ fontSize: "1.2em", fontWeight: "bold" }}
                                            >
                                                Description
                                            </Typography>
                                            <Divider />
                                            <Box mt={1}  >
                                                <Typo2 style={{ maxWidth: '500px', overflowWrap: 'break-word' }} >
                                                    {part?.description ? part?.description : '----'}</Typo2>
                                            </Box>
                                        </CardContent>
                                    </Card>

                                </Stack>
                            </Grid>
                            <Grid item sm={5} md={5} xs={12} lg={5}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Stack>

                                        <Avatar
                                            src={process.env.REACT_APP_API_KEY + '/' + part?.image}
                                            sx={{
                                                width: "250px",
                                                height: "250px",
                                                borderRadius: "3px",
                                            }}
                                        />
                                        {!report ?
                                            <Box mt={1} width={'100px'}  >
                                                <Button onClick={_ => setReport((pre) => !pre)} sx={{ backgroundColor: '#000c6bd0', color: '#fff', ':hover': { backgroundColor: '#00011bd0', color: '#fff' } }} >Report</Button>
                                            </Box>
                                            : null}
                                        {report ?
                                            <Stack mt={1} spacing={0.5} >
                                                <form onSubmit={formik.handleSubmit} >
                                                    <TextField
                                                        size="large"
                                                        multiline
                                                        rows={4}
                                                        name='description'
                                                        placeholder="Description"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.description}
                                                    />
                                                    <Stack direction={'row'} spacing={1}>
                                                        <Button type="submit" sx={{ backgroundColor: '#000c6bd0', color: '#fff', ':hover': { backgroundColor: '#00011bd0', color: '#fff' } }} >Submit</Button>
                                                        <Button onClick={_ => setReport((pre) => !pre)} sx={{ backgroundColor: '#000c6bd0', color: '#fff', ':hover': { backgroundColor: '#00011bd0', color: '#fff' } }} >Cancle</Button>

                                                    </Stack>
                                                </form>
                                            </Stack>
                                            : null}
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
