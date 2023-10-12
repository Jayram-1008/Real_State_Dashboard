import React, { useMemo } from 'react';
import { Paper, Box, TextField,  Typography,  InputAdornment, useTheme, Button } from '@mui/material';
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useOutletContext } from "react-router-dom";


const Nominee = () => {

    const theme = useTheme();
    const {formData, setFormData, handleNext, handlePrevious} = useOutletContext()

    const handleFormSubmit = (values) => {
        setFormData(values)
        handleNext();
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
                                    <Typography sx={{ flex: 1 }} variant='h6' color='primary'>Nominee Information</Typography>
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
                                            label='Nominee first name'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.nominee_first_name}
                                            name="nominee_first_name"
                                            error={!!touched.nominee_first_name && !!errors.nominee_first_name}
                                            helperText={touched.nominee_first_name && errors.nominee_first_name}
                                        />
                                        <TextField
                                            fullWidth
                                            type='text'
                                            variant='standard'
                                            label='Nominee last name'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.nominee_last_name}
                                            name="nominee_last_name"
                                            error={!!touched.nominee_last_name && !!errors.nominee_last_name}
                                            helperText={touched.nominee_last_name && errors.nominee_last_name}
                                        />
                                        <TextField
                                            fullWidth
                                            type='number'
                                            variant='standard'
                                            label='Age'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.nominee_age}
                                            name="nominee_age"
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    years
                                                  </InputAdornment>
                                                ),
                                            }}
                                            error={!!touched.nominee_age && !!errors.nominee_age}
                                            helperText={touched.nominee_age && errors.nominee_age}
                                        />
                                        <TextField
                                            fullWidth
                                            type='text'
                                            variant='standard'
                                            label='Relation'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.relation}
                                            name="relation"
                                            error={!!touched.relation && !!errors.relation}
                                            helperText={touched.relation && errors.relation}
                                        />
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Button
                                            type="button"
                                            sx={{ margin: "20px 0px" }}
                                            onClick={handlePrevious}
                                            variant="outlined"
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            type="submit"
                                            sx={{ margin: "20px 0px" }}
                                            variant="contained"
                                        >
                                            Next
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
    nominee_first_name: yup.string().required("Required"),
    nominee_last_name: yup.string().required("Required"),
    nominee_age: yup.string().required("Required"),
    relation: yup.string().required("Required"),
    
});
// const initialValues = {
//    nominee_first_name:'',
//    nominee_last_name:'',
//    age:'',
//    relation:'',
// };

export default Nominee