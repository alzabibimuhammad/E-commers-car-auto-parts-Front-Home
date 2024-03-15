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
      if (image) {
        values.image = image;
    } else {
        values.image = Data.image;
    }
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
        setImageApi(file)
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

                <Grid container>
                  <Grid item sm={4} xs={4} md={4}>
                    <Typography>Name</Typography>
                    <TextField
                      size="small"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                  </Grid>
                  <Grid item sm={4} xs={4} md={4}>
                    <Typography>Email</Typography>
                    <TextField
                      size="small"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </Grid>
                  <Grid item sm={4} xs={4} md={4}>
                    <Typography>Password</Typography>
                    <TextField
                      type={ visible ? "text":"password"}
                      size="small"
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
                <Grid container>
                  <Grid item sm={4} xs={4} md={4}>
                    <Typography>Address</Typography>
                    <TextField
                      size="small"
                      name="address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                    />
                  </Grid>
                  <Grid item sm={4} xs={4} md={4}>
                    <Typography>Phone</Typography>
                    <TextField
                      size="small"
                      name="phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                  </Grid>

                  <Grid item sm={4} xs={4} md={4}>
                    <Typography>Balance</Typography>
                    <TextField
                      size="small"
                      name="balance"
                      onChange={formik.handleChange}
                      value={formik.values.financial_balance}
                    />
                   
                  </Grid>
                </Grid>
              </Stack>
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
