import AlertDialogDelete from "../delete";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import EditIcon from '@mui/icons-material/Edit';
import EditProfile from "../../query/editProfile";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";

const EditProfileCard = ({ Data }) => {

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [visible,setVisible] = useState(false)
  
  const [image, setImage] = useState(null);
  const [imageApi, setImageApi] = useState(null);
  
  const {mutate:EditProfileApi} =EditProfile() 

  const defaultValues = {
    id:Data?.id,
    name: Data?.name,
    email: Data?.email,
    phone: Data?.phone,
    address: Data?.address,
    financial_balance:Data?.financial_balance,
    password:"",
    image:image?image:Data?.image
  };
  const handleSubmit = (values) => {
    EditProfileApi(values);
};

  const formik = useFormik({
    initialValues: defaultValues,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleImageChange=event=>{
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        formik.setFieldValue('image',file)
      };
      reader.readAsDataURL(file);
    }
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        marginBottom={6}
        marginTop={3}
        sx={{ marginLeft: { sm: "15%", md: "15%", xs: "5%" } }}
      >
        <Grid item sm={8} xs={11} md={8}>
          <Card sx={{ height: "200px", backgroundColor: "#000D6B" }}>
            <CardContent>
              <Stack
                marginLeft={{ sm: 6, md: 6, xs: 1 }}
                direction={"row"}
                alignItems={"center"}
                spacing={{ sm: 3, md: 3, xs: 1 }}
              >
            <label htmlFor="imageInput">
              <Box>
                <Avatar
                  src={image||process.env.REACT_APP_API_KEY+'/'+Data?.image}
                  sx={{ width: 150, height: 150 }}
                  
                />
                <Box sx={{ position:'relative',color:'#fff',left:'120px',bottom:'30px' }}><EditIcon fontSize="small" /></Box>
                </Box>
                </label>
                <TextField
                  id="imageInput"
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleImageChange}
                />
                <Stack sx={{ color: "#fff" }}></Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={8} xs={11} md={8}>
          <Card sx={{ height: "600px" }}>
            <CardContent>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography>Information</Typography>
                  <Divider />
                </Stack>

                <Grid container spacing={{ sm:1,md:1,lg:1,xs:0 }} >
                  <Grid item sm={4} xs={12} md={4}>
                    <Typography>Name</Typography>
                    <TextField
                      size="small"
                      name="name"
                      fullWidth

                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </Grid>
                  <Grid item sm={4} xs={12} md={4}>
                    <Typography>Email</Typography>
                    <TextField
                      size="small"
                      fullWidth

                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </Grid>
                  <Grid item sm={4} xs={12} md={4}>
                    <Typography>Password</Typography>
                    <TextField
                      type={ visible ? "text":"password"}
                      size="small"
                      fullWidth

                      name="password"
                      onChange={formik.handleChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {visible?
                            <Box onClick={()=>setVisible(false)} sx={{ cursor:'pointer' }} >
                              <VisibilityOffIcon/>
                            </Box>
                            :
                            <Box onClick={()=>setVisible(true)} sx={{ cursor:'pointer' }} >

                            <VisibilityIcon/>
                            </Box>
                            }
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>

                <Stack spacing={1}>
                  <Typography>Accommodation</Typography>
                  <Divider />
                </Stack>
                <Grid container spacing={{ sm:1,md:1,lg:1,xs:0 }}  >
                  <Grid item sm={4} xs={12} md={4}>
                    <Typography>Address</Typography>
                    <TextField
                      size="small"
                      fullWidth
                      name="address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                    />
                  </Grid>
                  <Grid item sm={4} xs={12} md={4}>
                    <Typography>Phone</Typography>
                    <TextField
                      size="small"
                      fullWidth
                      name="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </Grid>

                  <Grid item sm={4} xs={12} md={4}>
                    <Typography>Balance</Typography>
                    <TextField
                      size="small"
                      fullWidth
                      name="balance"
                      onChange={formik.handleChange}
                      value={formik.values.financial_balance}
                    />
                   
                  </Grid>
                </Grid>
              </Stack>
              <Stack spacing={1} sx={{marginTop:{sm:'30px',md:'30px',lg:'30px',xs:'20px'}}} direction={'row'} >
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#000D6B",
                  color: "#fff",
                  ":hover": { backgroundColor: "#000D6B", color: "#fff" },
                }}
              >
                Edit
              </Button>
              <Button        sx={{
                  backgroundColor: "orange",
                  color: "#fff",
                  ":hover": { backgroundColor: "orange", color: "#fff" },
                }} >
                <Link to={'/userProfile'} style={{ textDecoration:'none',color:'#fff' }} >
                 Cancle
                </Link>
                
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        {deleteOpen && (
          <AlertDialogDelete open={deleteOpen} setDeleteOpen={setDeleteOpen} />
        )}
      </Grid>
    </form>
  );
};

export default EditProfileCard;
