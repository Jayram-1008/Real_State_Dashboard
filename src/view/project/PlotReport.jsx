import React, { useMemo, useState } from 'react';
import { Paper, Box, TextField,  Typography,  FormHelperText, useTheme, Button, InputAdornment, OutlinedInput } from '@mui/material';
import { Formik } from "formik";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as yup from "yup";
import CustomTable from '../../components/table/CustomTable';
import { useOutletContext } from 'react-router-dom';
import PlotReportTable from '../../components/table/PlotReportTable';
import { Delete, Edit, Search } from '@mui/icons-material';
import Header from '../../components/header';
const PlotReport = () => {

    const {addPlotReportColumn} = useOutletContext();

    const handleFormSubmit = (values) => {
        // Create a new project object with the entered project name
        // Add the new project to the list of projects
  
    }

  return (
    <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: { xs: "", md: "center" }, gap: "20px", flexDirection: { xs: "column", md: "row" } }}>
            <Header title="Plot Reports" />
            <Box sx={{ display: "flex", gap: "10px", flexDirection: { xs: "column-reverse", md: "row" } }}>
                <Box sx={{ display: "flex", justifyContent:{xs:'start', md:'end'}, gap: "10px" }}>
                    <Button  size='small' variant='contained' color='success' >Export to Excel</Button>
                    <Button  size='small' variant='contained' color='warning' startIcon={<Edit />} >Edit</Button>
                    <Button  size='small' variant='contained' color='error' startIcon={<Delete />}>Delete</Button>
                </Box>
                <FormControl sx={{ width: { xs: "100%", md: "40ch" } }} variant="outlined">
                    <OutlinedInput
                        sx={{ height: "35px" }}
                        placeholder="Search..."
                        // onChange={(e) => debouncedSearch(e.target.value)}
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
        <Box sx={{marginTop:'15px'}}>
            <PlotReportTable addPlotReportColumn={addPlotReportColumn}/>
        </Box>
    </Box>
    )
}

const checkoutSchema = yup.object().shape({
    select_project: yup.string().required("Please select project"),
    block_name: yup.string().required("Enter block name")
  });
  
  const initialValues = {
    select_project:'',
    block_name:'',
  }

export default PlotReport