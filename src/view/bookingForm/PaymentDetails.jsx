import React, { useMemo } from 'react';
import { Paper, Box, TextField, Typography, Button, InputAdornment, FormControl, InputLabel, MenuItem, Select, FormHelperText, useTheme } from '@mui/material';
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useOutletContext } from "react-router-dom";

const PaymentDetails = () => {

    const theme = useTheme();
    const {formData, setFormData, handleNext, handlePrevious} = useOutletContext()

    const handleFormSubmit = (values) => {
        setFormData(values)
        handleNext();
        console.log(values);
    }


  return (
    <>
        <Box sx={{marginTop:'15px',}}>
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
                                    <Typography sx={{ flex: 1 }} variant='h6' color='primary'>Payment Information</Typography>
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
                                            label='Rate'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.rate}
                                            name="rate"
                                            error={!!touched.rate && !!errors.rate}
                                            helperText={touched.rate && errors.rate}
                                        />
                                        <TextField
                                            fullWidth
                                            type='number'
                                            variant='standard'
                                            label='Total Amount'
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.total_amount}
                                            name="total_amount"
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    ₹
                                                  </InputAdornment>
                                                ),
                                            }}
                                            error={!!touched.total_amount && !!errors.total_amount}
                                            helperText={touched.total_amount && errors.total_amount}
                                        />
                                        <FormControl fullWidth variant='standard'>
                                            <InputLabel id="select-blood-group">Mode Of booking</InputLabel>
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
                                    </Box>
                                    <Box
                                        sx={{
                                            display:'flex',
                                            flexDirection:{xs:'column', md:'row'},
                                            gap:'20px'
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            type="number"
                                            label="Token Amount"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.token_amount}
                                            name="token_amount"
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    ₹
                                                  </InputAdornment>
                                                ),
                                            }}
                                            error={!!touched.token_amount && !!errors.token_amount}
                                            helperText={touched.token_amount && errors.token_amount}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            type="number"
                                            label="Agreement Amount"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.agreement_amount}
                                            name="agreement_amount"
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    ₹
                                                  </InputAdornment>
                                                ),
                                            }}
                                            error={!!touched.agreement_amount && !!errors.agreement_amount}
                                            helperText={touched.agreement_amount && errors.agreement_amount}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            type="number"
                                            label="Discount Amount"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.discount_amount}
                                            name="discount_amount"
                                            InputProps={{
                                                endAdornment: (
                                                  <InputAdornment position="end">
                                                    ₹
                                                  </InputAdornment>
                                                ),
                                            }}
                                            error={!!touched.discount_amount && !!errors.discount_amount}
                                            helperText={touched.discount_amount && errors.discount_amount}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            type="date"
                                            label="Token Amount Date"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.token_amount_date}
                                            name="token_amount_date"
                                            error={!!touched.token_amount_date && !!errors.token_amount_date}
                                            helperText={touched.token_amount_date && errors.token_amount_date}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display:'flex',
                                            flexDirection:{xs:'column', md:'row'},
                                            gap:'20px'
                                        }}
                                    >
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            type="text"
                                            label="Remark"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.remark}
                                            name="remark"
                                            error={!!touched.remark && !!errors.remark}
                                            helperText={touched.remark && errors.remark}
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
    rate: yup.string().required("Required"),
    total_amount: yup.string().required("Required"),
    booking_mode: yup.string().required("Required"),
    token_amount: yup.string().required("Required"),
    agreement_amount: yup.string().required("Required"),
    discount_amount: yup.string().required("Required"),
    token_amount_date: yup.string().required("Required"),
    remark: yup.string().required("Required"),
    
});
const initialValues = {
   rate:"",
   total_amount:"",
   booking_mode:"",
   token_amount:"",
   agreement_amount:"",
   discount_amount:"",
   token_amount_date:"",
   remark:""
};

export default PaymentDetails