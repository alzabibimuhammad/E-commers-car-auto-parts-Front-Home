import { Box, Button, Card, CardContent, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { showSuccesToast } from '../../../../../utiltis/toastSecces'
import { ShowErrorToast } from '../../../../../utiltis/showErrorToast'
import GetBrandsApi from '../../api/GetBrandsApi'
import schemaPropose from '../../validation/model'
import SaveProposeModleApi from '../../api/saveProposeModel'

export default function ProposeModel({ setClick, user }) {
    const [brand,setBrand] = useState([])
    
    const defaultValues = {
        seller_id: user?.id,
        model: "",
        type: "t"
    }
    useEffect(()=>{
        GetBrandsApi().then(res=>setBrand(res.data))
    },[])
    

    const handleSubmit = (values) => {
         SaveProposeModleApi(values)
    };
    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema:schemaPropose,
        onSubmit: val => {
            handleSubmit(val)
        }
    })
    return (
        <Card>
            <CardContent>
                <form onSubmit={formik.handleSubmit} >
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                        <Typography fontSize={20}>Propose Model</Typography>
                    </Box>
                    <Stack width={'100%'} direction={'row'} mt={2}  >
                        <Stack width={'90%'} spacing={1}  >

                            <TextField
                                fullWidth
                                name='model'
                                size='small'
                                label="Model"
                                onChange={formik.handleChange}
                                value={formik.values.model}
                                error={Boolean(formik.errors.model)}
                                helperText={formik.touched.model && formik.errors.model}

                                
                            />
                            <Select
                                name='type'
                                size='small'
                                onChange={formik.handleChange}
                                value={formik.values.type}
                                sx={{ border:formik.errors.type?'1px solid red':'none' }}
                            >
                                <MenuItem key={'t'} value={'t'} >Brand</MenuItem>
                                {brand?.map((val,index)=>(
                                    <MenuItem key={index} value={val.id} >{val.type}</MenuItem>
                                ))
                                }
                            </Select>
                            {formik.touched.type && formik.errors.type && (
                            <Typography variant="caption" color="error">
                                {formik.errors.type}
                            </Typography>
                            )}
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
