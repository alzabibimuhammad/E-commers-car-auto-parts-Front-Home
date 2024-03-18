import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';

import { Avatar, Box, CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import GetCategoriesApi from '../../../../parts/Add/api/GetCategoriesApi';
import GetModelsApi from '../../../../parts/Add/api/GetModelsApi';
import { useFormik } from 'formik';
import EditPart from '../../hooks/query/EditPart';

export default function DrawerEditPart({ open, setOpen, part }) {


  const [category, setcategory] = React.useState()
  const [model, setModel] = React.useState()
  
  const {mutate:EditPartApi} = EditPart()

  const handlesubmit=values => {
    EditPartApi(values)
    handleClose()
  }
  const handleClose =_=>{
    setOpen(false)
  }
  const defaultValues = {
    part_id:part?.id,
    name: part?.name,
    amount: part?.amount,
    price:part?.price ,
    description:part?.description,
    category_id:part?.category_id,
    model_id:part?.model_id,
    image:part?.image,
    seller_id:part?.seller_id
  }


  const formik = useFormik({
    initialValues: defaultValues,
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
    {model && category ?

        <form onSubmit={formik.handleSubmit} > 
        <Stack>
          <Box sx={{ borderRadius: '0px 0px 20px 20px', paddingTop: '10px', backgroundColor: 'rgb(210,210,210)' }} >
            <Typography variant='h4' sx={{ ml: 2 }} >Edit Part</Typography>
          </Box>
          <Stack mt='20px' direction={'row'} justifyContent={'center'} >
            <Avatar sx={{ width: '200px', height: '200px', borderRadius: '5px' }} src={process.env.REACT_APP_API_KEY + '/' + part?.image} />
            
          </Stack>
          <Stack mt='50px' width={'350px'} ml={'10px'} spacing={1} >
            <Box>
            <Box sx={{ position:'relative',top:'6px',left:'14px' }} >
              <Typography fontSize={12} >Image</Typography>
            </Box>
            <TextField size='small' type='file' fullWidth  name='image'  onChange={handleImageChange} />
       
            </Box>
            <TextField size='small' fullWidth label='Name' name='name' value={formik?.values?.name} onChange={formik.handleChange} />
            <TextField size='small' fullWidth label='Amount' name='amount' value={formik?.values?.amount} onChange={formik.handleChange} />
            <TextField size='small' fullWidth label='Price' name='price' value={formik?.values?.price} onChange={formik.handleChange} />
            <TextField size='small' fullWidth label='Description' name='description' value={formik?.values?.description} onChange={formik.handleChange} />

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
                <MenuItem value={"t"} key={"t"}>Model</MenuItem>
                {model?.map((val,index)=>(
                  <MenuItem value={val?.id} key={index}>{val?.model}</MenuItem>

                ))

                }
              </Select>
              

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
                {category?.map((val,index)=>(
                  <MenuItem value={val?.id} key={index}>{val?.name}</MenuItem>

                ))

                }
              </Select>
              

            </FormControl>
            

          </Stack>
          <Stack direction={'row'} sx={{ height:'100%' }} spacing={1} justifyContent={'end'} alignItems={'end'} >
            <Button onClick={handleClose} >Cancle</Button>
            <Button type='submit' >Save</Button>
          </Stack>
        </Stack>
        </form>
        :
        <Box sx={{ width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center' }} >
    
    <CircularProgress/>

</Box>}
      </Drawer>
    </div>
    
  );
}
