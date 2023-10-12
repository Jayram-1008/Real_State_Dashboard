import React, { useEffect, useState } from 'react'
import { Box, Paper, FormControl, OutlinedInput, InputAdornment, Button, Modal, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Delete, Edit, Search } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import clsx from "clsx";
import dayjs from 'dayjs';
import Header from '../../components/header'
import { setHiddenColumn } from '../../store/globalSlice';
import { useMycontext } from '../../components/global/MyContext';

const columns = [
    {
        field: 'id',
        headerName: 'S.No',
        filterable: false,
        width: 30,
    },
    {
        field: 'associate_id',
        headerName: 'Associate ID',
        width: 150
    },
    {
        field: 'full_name',
        headerName: 'Full Name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        minWidth: 200,
        flex: 1,
        valueGetter: (params) =>
            `${params.row.first_name || ''} ${params.row.last_name || ''}`,
    },
    {
        field: 'mobile_no',
        headerName: 'Mobile No',
        width: 150,
    },
    {
        field: 'sponsor_code',
        headerName: 'Sponsor Code',
        width: 150,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 110,
        cellClassName: (params) => {
            if (params.value === null) {
                return "";
            }
            return clsx("super-app", {
                golden: params.value === 'Golden',
                diamond: params.value === 'Diamond',
            });
        }
    },
    {
        field: 'branch',
        headerName: 'Branch',
        width: 100,
    },
    {
        field: 'join_date',
        headerName: 'Joining Date',
        width: 110,
        valueGetter: (params) =>
            `${dayjs(params.row.join_date).format('DD-MMM-YYYY')}`,
    },
    {
        field: 'pan_no',
        headerName: 'Pan',
        width: 150,
    },
    {
        field: 'city',
        headerName: 'City',
        width: 110,
    },

];

const AssociateReport = () => {

    const dispatch = useDispatch();
    const props = useOutletContext();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { setUser } = useMycontext();
    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if (selectionModel.length !== 1) {
            enqueueSnackbar("Please select one Associate.", { variant: "error" });
            return;
        }
        setOpen(true);
    }
    const handleClose = () => setOpen(false);

    const [page, setPage] = useState(0);
    const [rowCount, setRowCount] = useState(0);
    const [selectionModel, setSelectionModel] = useState([]);
    const hiddenColumn = useSelector((state) => state.global.hiddenColumn);

    const [rows, setRows] = useState([]);

    function debounce(fn, delay) {
        var timer = null;
        return function () {
            var context = this;
            var args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
    }

    const searchItems = async (searchtext) => {
        const formData = new FormData();
        formData.append('search-associate', searchtext);
        setLoading(true);
        axios.post('/real_state_api/admin/index', formData)
            .then(function (response) {
                if (response.data.status) {
                    setRows(response.data.data.map((row, index) => ({ ...row, id: index + 1 })));
                }
                else {
                    setRows([]);
                    enqueueSnackbar(response.data.message, { variant: "error" });
                }
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }
    const debouncedSearch = debounce(searchItems, 1000);

    const getAssociates = () => {
        const formData = new FormData();
        formData.append('get-associates', 0);
        setLoading(true);
        axios.post('/real_state_api/admin/index', formData)
            .then(function (response) {
                if (response.data.status) {
                    setRows(response.data.data.map((row, index) => ({ ...row, id: index + 1 })));
                }
                else {
                    setRows([]);
                    enqueueSnackbar(response.data.message, { variant: "error" });
                }
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }

    const goToEdit = () => {
        if (selectionModel.length !== 1) {
            enqueueSnackbar("Please select one Associate.", { variant: "error" });
            return;
        }
        setUser({ 'editid': rows[selectionModel[0] - 1]?.associate_id });
        navigate('/edit-associate');
    }

    const handelDelete = () => {
        const formData = new FormData();
        formData.append('delete-associate', rows[selectionModel[0] - 1]?.associate_id);
        handleClose();
        setLoading(true);
        axios.post('/real_state_api/admin/index', formData)
            .then(function (response) {
                if (response.data.status) {
                    enqueueSnackbar(response.data.message, { variant: "success" });
                    getAssociates();
                    setSelectionModel([]);
                }
                else {
                    handleClose();
                    enqueueSnackbar(response.data.message, { variant: "error" });
                }
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        getAssociates();
    }, []);

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: { xs: "", md: "center" }, gap: "20px", flexDirection: { xs: "column", md: "row" } }}>
                <Header title="View Associate" />
                <Box sx={{ display: "flex", gap: "10px", flexDirection: { xs: "column-reverse", md: "row" } }}>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                        <Button sx={{ flex: 2 }} size='small' variant='contained' color='success' >Export to Excel</Button>
                        <Button sx={{ flex: .9 }} size='small' variant='contained' color='warning' startIcon={<Edit />} onClick={goToEdit}>Edit</Button>
                        <Button sx={{ flex: 1.2 }} size='small' variant='contained' color='error' startIcon={<Delete />} onClick={handleOpen}>Delete</Button>
                    </Box>
                    <FormControl sx={{ width: { xs: "100%", md: "40ch" } }} variant="outlined">
                        <OutlinedInput
                            sx={{ height: "35px" }}
                            placeholder="Search..."
                            onChange={(e) => debouncedSearch(e.target.value)}
                            id="outlined-adornment-weight"
                            endAdornment={
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            }
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                "aria-label": "weight"
                            }}
                        />
                    </FormControl>
                </Box>
            </Box >
            <Box sx={{
                height: { xs: "calc(100vh - 235px)", md: "calc(100vh - 150px)" },
                flex: 1,
                maxWidth: "calc(100vw - 30px)",
                marginTop: "15px",
                "& .super-app.diamond": {
                    "& .MuiDataGrid-cellContent": {
                        textAlign: "center",
                        minWidth: "80px",
                        border: "solid 1px #B9F2FF",
                        borderRadius: "20px",
                        padding: "5px 10px",
                        color: "#000",
                        fontWeight: "500",
                        fontFamily: "Poppins",
                        backgroundColor: "#B9F2FF"
                    }
                },
                "& .super-app.golden": {
                    "& .MuiDataGrid-cellContent": {
                        textAlign: "center",
                        minWidth: "80px",
                        border: "solid 1px #ffeb3b",
                        borderRadius: "20px",
                        padding: "5px 10px",
                        color: "#000",
                        backgroundColor: "#ffeb3b"
                    }
                },
            }}>
                <DataGrid
                    loading={loading}
                    checkboxSelection={true}
                    rowSelectionModel={selectionModel}
                    onRowSelectionModelChange={(selection) => {
                        if (selection.length > 1) {
                            const selectionSet = new Set(selectionModel);
                            const result = selection.filter((s) => !selectionSet.has(s));
                            setSelectionModel(result);
                        } else {
                            setSelectionModel(selection);
                        }
                    }}
                    rows={rows}
                    columns={columns}
                    onPaginationModelChange={(params) => setPage(params.page)}
                    hideFooterSelectedRowCount={true}
                    pageSizeOptions={[100]}
                    initialState={{
                        columns: {
                            columnVisibilityModel: hiddenColumn.payload
                        },
                    }}
                    onColumnVisibilityModelChange={(params) => { dispatch(setHiddenColumn(params)) }}
                    rowCount={rowCount}
                    paginationMode="server"
                />
            </Box>

            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Paper sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: 600,
                    minWidth: 350,
                    p: 4,
                }}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Do you want to Delete {rows[selectionModel[0] - 1]?.first_name}'s Account?
                    </Typography>
                    <Box sx={{ display: "flex", gap: '10px', marginTop: "30px" }}>
                        <Button
                            fullWidth size="large"
                            sx={{ borderRadius: "5px", margin: "0px", height: "40px" }}
                            variant="contained"
                            color="primary"
                            onClick={handleClose}
                        >No</Button>
                        <Button
                            fullWidth size="large"
                            sx={{ borderRadius: "5px", margin: "0px", height: "40px" }}
                            variant="contained"
                            color="error"
                            onClick={handelDelete}
                        >Yes</Button>
                    </Box>
                </Paper>
            </Modal>
        </>
    )
}

export default AssociateReport