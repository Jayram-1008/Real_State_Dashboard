import React, { useMemo, useState } from 'react';
import { Paper, Box, TextField,  Typography,  FormHelperText, useTheme, Button } from '@mui/material';
import { Formik } from "formik";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as yup from "yup";
import CustomTable from '../../components/table/CustomTable';
import { useOutletContext } from 'react-router-dom';
import Header from '../../components/header';

const PlotAdd = () => {

    const {addPlotColumn} = useOutletContext();

    const handleFormSubmit = (values) => {
        // Create a new project object with the entered project name
        // Add the new project to the list of projects
  
    }
  return (
    <Box>
        <Header title="Add Plot"/>
        <Box sx={{mt:1}}>
            <Paper sx={{p:1.5}} elevation={4}>
                <Formik
                    enableReinitialize={true}
                    onSubmit={handleFormSubmit}
                    validationSchema={checkoutSchema}
                    initialValues={initialValues}
                >
                    {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    handleReset,
                    }) => (
                        <form>
                            <Box sx={{display:'flex', flexDirection:'column', gap:'20px', }}>
                                <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'center', gap:'20px', width:'100%'}}>
                                    <FormControl fullWidth variant='standard'>
                                        <InputLabel id="select-blood-group">Select Project</InputLabel>
                                        <Select
                                            label="Mode of booking"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.booking_mode}
                                            name="booking_mode"
                                            error={!!touched.booking_mode && !!errors.booking_mode}
                                        >
                                            <MenuItem value="N/A">N/A</MenuItem>
                                            <MenuItem value="Token">Token</MenuItem>
                                            <MenuItem value="Agreement">Agreement</MenuItem>
                                            <MenuItem value="Full Amount">Full Amount</MenuItem>
                                        </Select>
                                        <FormHelperText error={!!touched.booking_mode && !!errors.booking_mode}>
                                            {touched.booking_mode && errors.booking_mode}
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl fullWidth variant='standard'>
                                        <InputLabel id="select-blood-group">Select Block</InputLabel>
                                        <Select
                                            label="Mode of booking"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.booking_mode}
                                            name="booking_mode"
                                            error={!!touched.booking_mode && !!errors.booking_mode}
                                        >
                                            <MenuItem value="N/A">N/A</MenuItem>
                                            <MenuItem value="Token">Token</MenuItem>
                                            <MenuItem value="Agreement">Agreement</MenuItem>
                                            <MenuItem value="Full Amount">Full Amount</MenuItem>
                                        </Select>
                                        <FormHelperText error={!!touched.booking_mode && !!errors.booking_mode}>
                                            {touched.booking_mode && errors.booking_mode}
                                        </FormHelperText>
                                    </FormControl>
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="number"
                                        label="Plot No. From"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.plot_number_from}
                                        name="plot_number_from"
                                        error={!!touched.plot_number_from && !!errors.plot_number_from}
                                        helperText={touched.plot_number_from && errors.plot_number_from}
                                    />
                                </Box>
                                <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'center', gap:'20px', }}>
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="number"
                                        label="Plot No. To"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.plot_number_to}
                                        name="plot_number_to"
                                        error={!!touched.plot_number_to && !!errors.plot_number_to}
                                        helperText={touched.plot_number_to && errors.plot_number_to}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="number"
                                        label="Landarea(Sqft)"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.landarea}
                                        name="landarea"
                                        error={!!touched.landarea && !!errors.landarea}
                                        helperText={touched.landarea && errors.landarea}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        type="number"
                                        label="Dimension"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.dimension}
                                        name="dimension"
                                        error={!!touched.dimension && !!errors.dimension}
                                        helperText={touched.dimension && errors.dimension}
                                    />
                                </Box>
                                <Box sx={{display:'flex', gap:'20px', mt:2, justifyContent:'center'}}>
                                    <Button variant="contained" color="primary" type='submit'> Submit</Button>
                                    <Button variant="outlined" color="error" onClick={handleReset} > Reset</Button>
                                </Box> 
                            </Box>
                        </form>
                    )}
                </Formik>
            </Paper>
        </Box>
        <Box sx={{mt:2}}>
            <Paper sx={{p:1}} elevation={4}>
                <Typography variant='h5' color="primary">Plot Lists</Typography>  
                <Box style={{ marginTop: '10px' }}>
                    <CustomTable  addPlotColumn={addPlotColumn}/>
                </Box>                    
            </Paper>
        </Box>  
    </Box>
  )
}


const checkoutSchema = yup.object().shape({
    
  });
  
  const initialValues = {
    
  }
export default PlotAdd