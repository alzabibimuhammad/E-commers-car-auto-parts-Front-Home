import { Box, Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import SaveProposeCategoryApi from '../../api/saveProposeCategoryApi'
import schemaProposeCategory from '../../validation/category'
export default function ProposeCategory({ setClick, user }) {
    const defaultValues = {
        seller_id: user?.id,
        name: "",
        description: ""
    }

    const handleSubmit = async (values) => {
        SaveProposeCategoryApi(values)
    };
    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema:schemaProposeCategory,
        onSubmit: val => {
            handleSubmit(val)
        }
    })
    return (
        <Card>
            <CardContent>
                <form onSubmit={formik.handleSubmit} >
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                        <Typography fontSize={20}>Propose Category</Typography>
                    </Box>
                    <Stack width={'100%'} direction={'row'} mt={2}  >
                        <Stack width={'90%'} spacing={1}  >

                            <TextField
                                fullWidth
                                name='name'
                                size='small'
                                label="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                error={Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}

                                

                            />
                            <TextField
                                fullWidth
                                name='description'
                                size='small'
                                label="Description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                error={Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}

                                
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
