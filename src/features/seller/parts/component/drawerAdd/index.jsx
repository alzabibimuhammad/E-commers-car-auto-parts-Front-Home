import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import { Avatar, Box, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import GetCategoriesApi from '../../../../parts/Add/api/GetCategoriesApi';
import GetModelsApi from '../../../../parts/Add/api/GetModelsApi';
import { useFormik } from 'formik';
import schema from '../../validation';
import AddPart from '../../../../parts/Add/query/AddPart';
import { useContext } from 'react';
import { UserContext } from '../../../../../components/Layout/Layout';

export default function DrawerAddPart({ open, setOpen }) {


  const [category, setcategory] = React.useState()
  const [model, setModel] = React.useState()

  const { mutate: AddPartApi } = AddPart()
  const user = useContext(UserContext)
  const handlesubmit = values => {
    AddPartApi(values)
    handleClose()
  }
  const handleClose = _ => {
    setOpen(false)
  }


  const defaultValues = {
    seller_id:user?.id,
    name: '',
    amount: '',
    price: '',
    description: '',
    category_id: 't',
    model_id: "t",
    image: '',
  }


  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: schema,
    onSubmit: values => {
      handlesubmit(values)
    },
  });
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue('image', file);
  };


  React.useEffect(() => {
    GetCategoriesApi().then(data => setcategory(data?.data))
    GetModelsApi().then(data => setModel(data?.data))
  }, []);

  const drawerWidth = 400
  return (
    <div>
      <Drawer
        open={open}
        onClose={handleClose}
        sx={{

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { xl: drawerWidth, md: drawerWidth, sm: drawerWidth, xs: '90%' },
            overflowX: 'hidden'
          },
        }}
        anchor='right'

      >
        <form onSubmit={formik.handleSubmit} >
          <Stack>
            <Box sx={{ borderRadius: '0px 0px 20px 20px', paddingTop: '10px', backgroundColor: 'rgb(210,210,210)' }} >
              <Typography variant='h4' sx={{ ml: 2 }} >Add Part</Typography>
            </Box>
            <Stack mt='50px' width={'350px'} ml={'10px'} spacing={1} >
              <Box>
                <Box sx={{ position: 'relative', top: '6px', left: '14px' }} >
                  <Typography fontSize={12} >Image</Typography>
                </Box>
                <TextField size='small' type='file' fullWidth name='image' required onChange={handleImageChange} />

              </Box>
              <TextField size='small' fullWidth label='Name' name='name' value={formik?.values?.name}
                error={Boolean(formik.errors.name)} 
                helperText={formik.errors.name && formik.touched.amount ?formik.errors.name:null }

                onChange={formik.handleChange} />
              <TextField size='small' type='number' fullWidth label='Amount' name='amount' value={formik?.values?.amount}
                             error={Boolean(formik.touched.amount&&formik.errors.amount)} 
                             helperText={formik.errors.amount && formik.touched.amount ?formik.errors.amount:null }
              onChange={formik.handleChange} />
              <TextField size='small' fullWidth type='number' label='Price' name='price'
                                      error={Boolean(formik.touched.price&&formik.errors.price)} 
                                      helperText={formik.errors.price && formik.touched.price ?formik.errors.price:null }
              value={formik?.values?.price} onChange={formik.handleChange} />
              <TextField size='small' fullWidth label='Description' name='description' 
                                      error={Boolean(formik.touched.description&&formik.errors.description)} 
                                      helperText={formik.errors.description && formik.touched.description ?formik.errors.description:null }
              value={formik?.values?.description} onChange={formik.handleChange} />

              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size='small'
                  labe='age'
                  name='model_id'
                  value={formik?.values?.model_id}
                  onChange={formik.handleChange}
                  
                >
                  <MenuItem value={"t"} key={'t'}>Model</MenuItem>
                  {model?.map((val, index) => (
                    <MenuItem value={val?.id} key={index}>{val?.model}</MenuItem>

                  ))

                  }
                </Select>
                {formik.touched.model_id && formik.errors.model_id && (
                  <Typography variant="caption" color="error">
                    {formik.errors.model_id}
                  </Typography>
                )}

              </FormControl>

              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size='small'
                  labe='age'
                  name='category_id'
                  value={formik?.values?.category_id}
                  onChange={formik.handleChange}

                >
                  <MenuItem value={"t"} key={"t"}>Category</MenuItem>
                  {category?.map((val, index) => (
                    <MenuItem value={val?.id} key={index}>{val?.name}</MenuItem>

                  ))

                  }
                </Select>

                {formik.touched.category_id && formik.errors.category_id && (
                    <Typography variant="caption" color="error">
                      {formik.errors.category_id}
                    </Typography>
                  )}
              </FormControl>


            </Stack>
            <Stack direction={'row'} sx={{ height: '100%' }} spacing={1} justifyContent={'end'} alignItems={'end'} >
              <Button onClick={handleClose} >Cancle</Button>
              <Button type='submit' >Save</Button>
            </Stack>
          </Stack>
        </form>

      </Drawer>
    </div>
  );
}
