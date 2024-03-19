import React from "react";
import { Grid, Stack, TextField, Button } from "@mui/material";
import AuthUser from "../components/AuthUser";

import {showSuccesToast} from '../utiltis/toastSecces'
import {ShowErrorToast} from '../utiltis/showErrorToast'

const Login = () => {
  const { http, setToken } = AuthUser();

  const sendDataToApi = (formData) => {
    http
      .post("/login", { email: formData.email, password: formData.password })
      .then((res) => {
        setToken(res.data.user, res.data.access_token);
        showSuccesToast( "Success");
      })
      .catch((error) => {
        ShowErrorToast(error.response.data.error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    sendDataToApi(formData);
  };

  return (
    <Grid container spacing={2} padding={5} >
      <Grid item xs={12} >
        <h6 className="fw-bold mb-4">Login</h6>
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <form onSubmit={handleSubmit}>
          
          <Stack spacing={2}>
            <TextField size="small" label="Email" type="email" name="email" />
            <TextField
              type="password"
              size="small"
              label="Password"
              name="password"
            />
            <Button type="submit"  sx={{ backgroundColor:'#000D6B',color:"#fff",':hover':{backgroundColor:'#000D6B',color:"#fff"} }} >
              Login
            </Button>
          </Stack>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
