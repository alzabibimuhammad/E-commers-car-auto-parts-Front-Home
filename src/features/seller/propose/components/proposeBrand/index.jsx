import { Box, Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import schemaBrand from '../../validation/brand'
import sendCarTypeApi from '../../api/saveBrandApi'
export default function ProposeBrand({ setClick, user }) {
    const defaultValues = {
        seller_id: user?.id,
        type: "",
    }

    const handleSubmit = (values) => {
        sendCarTypeApi(values)
    };
    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema:schemaBrand,
        onSubmit: val => {
            handleSubmit(val)
        }
    })
    return (
        <Card>
            <CardContent>
                <form onSubmit={formik.handleSubmit} >
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                        <Typography fontSize={20}>Propose Brand</Typography>
                    </Box>
                    <Stack width={'100%'} direction={'row'} mt={2}  >
                        <Stack width={'90%'} spacing={1}  >

                            <TextField
                                fullWidth
                                name='type'
                                size='small'
                                label="Brand"
                                onChange={formik.handleChange}
                                value={formik.values.type}
                                error={Boolean(formik.errors.type)}
                                helperText={formik.touched.type && formik.errors.type}

                            />
            
                            <Stack direction={'row'} >

                                <Button type='submit' >Submit</Button>
                                <Button onClick={_ => setClick(null)} >Cancle</Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </form>
            </CardContent>
        </Card>
    )
}
