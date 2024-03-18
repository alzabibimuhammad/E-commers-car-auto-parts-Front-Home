import { Box, Button, Stack } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AuthUser from "../../../../../components/AuthUser";
import usePartColunms from "../../hooks/usePartColunms";
import {  useState } from "react";
import AlertDialogDeleteAllParts from "../dialogs/DeleteAllparts";
import DrawerAddPart from "../drawerAdd";


const SellerPartsTable = ({ rows }) => {
    console.log("🚀 ~ SellerPartsTable ~ rows:", rows)
    const colunms = usePartColunms()
    const [isdelete,setIsDelete]=useState(false)
    const [isAdd,setIsAdd]=useState(false)
    
    return (
        <Box m="20px">
            <Stack direction={'row'} justifyContent={'end'} alignItems={'center'} spacing={1} >
                <Button sx={{ backgroundColor:'#000D6B',color:'#fff',':hover':{ backgroundColor:'#000D6B',color:'#fff',} }}  onClick={_=>setIsAdd(true)}>Add Part</Button><br />
                <Button sx={{ backgroundColor:'red',color:'#fff',':hover':{ backgroundColor:'red',color:'#fff',} }}  onClick={_=>setIsDelete(true)}>Delete All Parts</Button><br />
            </Stack>
            {isdelete && <AlertDialogDeleteAllParts open={isdelete} setDeleteOpen={setIsDelete} />}
            {isAdd && <DrawerAddPart open={isAdd} setOpen={setIsAdd} />}

            <Box
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
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={colunms}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default SellerPartsTable;
