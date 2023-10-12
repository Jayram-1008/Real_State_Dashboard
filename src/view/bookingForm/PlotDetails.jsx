import React, { useMemo } from 'react';
import { Paper, Box, TextField,  Typography,  Button, useTheme } from '@mui/material';
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useOutletContext } from "react-router-dom";

const PlotDetails = () => {

    const theme = useTheme();
    const {formData, setFormData, handlePrevious, handleHold} = useOutletContext()
    const handleFormSubmit = (values)=>{
        setFormData(values)
        handleHold();
    }

  return (
    <>
        <Box sx={{marginTop:'15px'}}>
            <Paper sx={{padding:'15px 20px'}}>
                <Formik 
                    enableReinitialize={true}
                    onSubmit={handleFormSubmit}
                    validationSchema={checkoutSchema}
                    initialValues={formData}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleSubmit,
                        handleChange,
                    }) =>(
                        <form onSubmit={handleSubmit}>
                            <Box sx={{display:'flex', flexDirection:'column', gap:'20px'}}>
                                <Box sx={{display:'flex', flexDirection:'column', gap:'10px', width:'100%'}}>
                                    <Typography sx={{ flex: 1 }} variant='h6' color='primary'>Plot Details</Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: "20px",
                                            flexDirection: { xs: "column", md: "row" },
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            type='text'
                                            variant='standard'
                                            label='Plot number'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.plot_number}
                                            name="plot_number"
                                            error={!!touched.plot_number && !!errors.plot_number}
                                            helperText={touched.plot_number && errors.plot_number}
                                        />
                                        <TextField
                                            fullWidth
                                            type='text'
                                            variant='standard'
                                            label='Khasra number'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.khasra_number}
                                            name="khasra_number"
                                            error={!!touched.khasra_number && !!errors.khasra_number}
                                            helperText={touched.khasra_number && errors.khasra_number}
                                        />
                                        <TextField
                                            fullWidth
                                            type='text'
                                            variant='standard'
                                            label='Mauza'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.mauza}
                                            name="mauza"
                                            error={!!touched.mauza && !!errors.mauza}
                                            helperText={touched.mauza && errors.mauza}
                                        />
                                    </Box>
                                    <Box 
                                        sx={{
                                            display:'flex',
                                            flexDirection:{xs:'column', md:'row'},
                                            gap:'20px',
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            type='number'
                                            variant='standard'
                                            label='Phh number'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.phh_number}
                                            name="phh_number"
                                            error={!!touched.phh_number && !!errors.phh_number}
                                            helperText={touched.phh_number && errors.phh_number}
                                        />
                                        <TextField
                                            fullWidth
                                            type='number'
                                            variant='standard'
                                            label='Square feet'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.square_feet}
                                            name="square_feet"
                                            error={!!touched.square_feet && !!errors.square_feet}
                                            helperText={touched.square_feet && errors.square_feet}
                                        />
                                        <TextField
                                            fullWidth
                                            type='number'
                                            variant='standard'
                                            label='Size'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.size}
                                            name="size"
                                            error={!!touched.size && !!errors.size}
                                            helperText={touched.size && errors.size}
                                        />
                                    </Box>
                                    <Box sx={{display:'flex', justifyContent:'space-between'}}>
                                        <Button
                                                type="button"
                                                sx={{ margin: "20px 0px" }}
                                                onClick={handlePrevious}
                                                variant="outlined"
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            sx={{margin:'20px 0px'}}
                                            variant="contained"
                                            type="submit"
                                        >
                                            Hold
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </form>
                    )}
                </Formik>
            </Paper>
        </Box>
    </>
  )
}

const checkoutSchema = yup.object().shape({
    plot_number: yup.string().required("Required"),
    khasra_number: yup.string().required("Required"),
    square_feet: yup.string().required('Required'),
    mauza: yup.string().required("Required"),
    size: yup.string().required("Required"),
    phh_number: yup.string().required("Required"),
    
});
const initialValues = {
    plot_number: '',
    khasra_number: '',
    mauza: '',
    size: '',
    mobile_no:'',
};
export default PlotDetails