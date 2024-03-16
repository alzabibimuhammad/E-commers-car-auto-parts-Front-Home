import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AuthUser from "../../../../../components/AuthUser";
import usePartColunms from "../../hooks/usePartColunms";
import {  useState } from "react";
import AlertDialogDeleteAllParts from "../dialogs/DeleteAllparts";


const SellerPartsTable = ({ rows }) => {
    const colunms = usePartColunms()
    const [isdelete,setIsDelete]=useState(false)

    return (
        <Box m="20px">
            <button className="btn" style={{ float: 'right', backgroundColor: 'orange' }} onClick={_=>setIsDelete(true)}>Delete All Parts</button><br />

            {isdelete && <AlertDialogDeleteAllParts open={isdelete} setDeleteOpen={setIsDelete} />}

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
