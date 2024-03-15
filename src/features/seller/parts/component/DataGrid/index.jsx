import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AuthUser from "../../../../../components/AuthUser";
import GetProfile from "../../../../profile/query/getProfile";
import usePartColunms from "../../hooks/usePartColunms";
import DeleteAllParts from "../../hooks/query/DeleteAllParts";
import { useState } from "react";
import AlertDialogDeleteAllParts from "../dialogs/DeleteAllparts";


const SellerPartsTable = ({ rows, user_id }) => {
    const colunms = usePartColunms()

    const { http } = AuthUser();

    const [isdelete,setIsDelete]=useState(false)


    // const DeleteAllParts=()=>{
    //   if (window.confirm("Are you sure you want to Delete?")) {
    //   http.get('/DeleteAllParts/'+user.id)  
    // }
    //   }




    return (
        <Box m="20px">
            <button className="btn" style={{ float: 'right', backgroundColor: 'orange' }} onClick={_=>setIsDelete(true)}>Delete All Parts</button><br />

            {isdelete && <AlertDialogDeleteAllParts open={isdelete} setDeleteOpen={setIsDelete} user_id={user_id} />}

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
