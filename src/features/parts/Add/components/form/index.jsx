import {
    Box,
    Button,
    Card,
    CardContent,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import { Form } from "reactstrap";

import React, { useContext } from "react";
import { useState, useEffect } from "react";
import AuthUser from "../../../../../components/AuthUser";

import { useFormik } from "formik";
import GetCategoriesApi from "../../api/GetCategoriesApi";
import GetModelsApi from "../../api/GetModelsApi";
import GetProfile from "../../../../profile/query/getProfile";
import AddPart from "../../api/AddPart";
import { UserContext } from "../../../../../components/Layout/Layout";

const AddPartForm = () => {
    const initialValues = {
        image:"",
        name:"",
        amount:"",
        model_id: "",
        category_id: "",
        description:"",
        price:""
    };

    const [posts, setPosts] = useState([]);
    const [category, setcategory] = useState([]);
    
    const user = useContext(UserContext);

    useEffect(() => {

        GetCategoriesApi().then(data => setcategory(data?.data))
        GetModelsApi().then(data => setPosts(data?.data))
    }, []);

    const [image,setImage] = useState()
    useEffect(()=>{

    console.log("🚀 ~ AddPartForm ~ image:", image)

    },[image])

    const handleChangeImage = (e) => {
        setImage(e.target.files[0]);
    };
    

    const handleSubmit = (values) => {
        
        values.seller_id = user?.id

        const formData = new FormData();
        formData.append("seller_id", user?.id);
        formData.append("name", values.name);
        formData.append("model_id", values.model_id);
        formData.append("category_id", values.category_id);
        formData.append("amount", values.amount);
        formData.append("price", values.price);
        formData.append("description", values.description);
        formData.append("image", image);
        
        AddPart(formData)

    };
    

    const formik = useFormik({
        initialValues: initialValues,
        
        onSubmit: (values,{resetForm }) => {
          handleSubmit(values);
          resetForm();

        },
      });

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "30px",
            }}
        >
            <Card sx={{ borderRadius: "12px", width: '600px' }}>
                <CardContent>
                    <h1 style={{ textAlign: "center" }}>Add Part</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <Stack sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                            <Stack spacing={1} sx={{ width: '100%' }}  >
                                Image:
                                <TextField required
                                    fullWidth
                                    size="small"
                                    type="file" name="image"
                                    onChange={handleChangeImage}
                                    />
                                <TextField
                                    required
                                    fullWidth
                                    size="small"


                                    type="text"
                                    label="Name"
                                    name="name"
                                    placeholder="Part Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    size="small"


                                    
                                    type="number"
                                    label="Amount"
                                    name="amount"
                                    placeholder="Add Amount"
                                    value={formik.values.amount}
                                    onChange={formik.handleChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    size="small"


                                    
                                    type="number"
                                    label="Price"
                                    name="price"
                                    placeholder="Add Price"
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    size="small"


                                    
                                    type="text"
                                    label="Description"
                                    name="description"
                                    placeholder="Add Description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                />
                                <Select
                                    required
                                    fullWidth
                                    size="small"

                                    label="model"
                                    name="model_id"
                                    value={formik.values.model_id}
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem key="" value="">Select Model</MenuItem>
                                    {posts?.map((data) => (
                                        <MenuItem key={data.id} value={data.id}>
                                            {data.model}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <Select
                                    required
                                    fullWidth
                                    size="small"
                                    label="model"
                                    name="category_id"
                                    value={formik.values.category_id}
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value="" key="" >Select Category</MenuItem>
                                    {category?.map((data) => (
                                        <MenuItem key={data.id} value={data.id}>
                                            {data.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <Button type="submit" color="secondary" variant="contained">
                                    Save Part
                                </Button>
                            </Stack>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AddPartForm;
