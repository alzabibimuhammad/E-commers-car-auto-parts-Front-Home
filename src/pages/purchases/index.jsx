    import { Box, CircularProgress, Typography, useTheme } from "@mui/material";
    import { useState, useEffect } from "react";
    import GetProfile from "../../features/profile/query/getProfile";
    import PurchaseTable from "../../features/purchases/component/DataGrid";
    import GetAllPurchase from "../../features/purchases/hooks/query/GetAllpurchase";
    import GetTotalMonyApi from "../../features/purchases/api/GetTotalMonyApi";
    const Purchases = () => {

        const [totalMony, settotalMony] = useState()

        const { data } = GetProfile()
        const user = data?.data    
        const {data:purchase} = GetAllPurchase(user?.id)
        const posts = purchase?.data

        useEffect(() => {
            if (user?.id) GetTotalMonyApi(user.id).then(data => settotalMony(data))
        }, [user]);

        return (
            <Box m="20px">
            {posts ? <Box
                    m="40px 0 0 0"
                    height="75vh"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column--cell": {
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                        },
                        "& .MuiCheckbox-root": {
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        },
                        marginBottom: '100px'
                    }}
                >
                    <h3>Total Mony:${totalMony?.data?totalMony?.data:0}.00</h3>
                    <PurchaseTable rows={posts} /> 
                    
                </Box>:
                <Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <CircularProgress />
            </Box>}
            </Box>
        );

    };

    export default Purchases;
