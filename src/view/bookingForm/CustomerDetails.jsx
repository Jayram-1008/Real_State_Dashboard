import React, { useMemo } from "react";
import {
  Paper,
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useTheme } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";

const CustomerDetails = () => {

  const {formData, setFormData, handleNext} = useOutletContext()

  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(timer);
      return new Promise((resolve) => {
        timer = setTimeout(async function () {
          try {
            const result = await fn.apply(context, args);
            resolve(result);
          } catch (error) {
            resolve(null); // Return null in case of an error
          }
        }, delay);
      });
    };
  }

  const searchPin = async (pincode) => {
    try {
      const response = await fetch(
        "https://api.postalpincode.in/pincode/" + pincode
      );
      const data = await response.json();
      return [
        data[0]?.PostOffice[0]?.District,
        data[0].PostOffice[0].State,
        data[0].PostOffice[0].Country,
      ];
    } catch (error) {
      console.log("error", error);
      throw error; // You can choose to handle or propagate the error as needed
    }
  };

  const debouncedSearchPin = debounce(searchPin, 1000);
  const theme = useTheme();

  const handleFormSubmit = (values) => {
    setFormData(values)
    handleNext();
    console.log(values);
}


  return (
    <>
      <Box sx={{ marginTop: "15px", }}>
        <Paper sx={{ padding: "15px 20px" }}>
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
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%",}}>
                    <Typography sx={{ flex: 1 }} variant='h6' color='primary'>Customer Information</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "20px",
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="standard"
                        type="text"
                        label="Associate ID"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="associate_id"
                        value={values.associate_id}
                        error={!!touched.associate_id && !!errors.associate_id}
                        helperText={touched.associate_id && errors.associate_id}
                      />
                      <TextField
                        fullWidth
                        variant="standard"
                        type="text"
                        label="Branch"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="branch"
                        value={values.branch}
                        error={!!touched.branch && !!errors.branch}
                        helperText={touched.branch && errors.branch}
                      />
                      <TextField
                        fullWidth
                        label="Product Name"
                        type="text"
                        variant="standard"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="product_name"
                        value={values.product_name}
                        error={!!touched.product_name && !!errors.product_name}
                        helperText={touched.product_name && errors.product_name}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: "20px",
                      }}
                    >
                      <TextField
                        fullWidth
                        type="text"
                        variant="standard"
                        label="Customer first name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="customer_first_name"
                        value={values.customer_first_name}
                        error={!!touched.customer_first_name && errors.customer_first_name}
                        helperText={
                          touched.customer_first_name && errors.customer_first_name
                        }
                      />
                      <TextField
                        fullWidth
                        type="text"
                        variant="standard"
                        label="Customer last name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="customer_last_name"
                        value={values.customer_last_name}
                        error={ !!touched.customer_last_name && !!errors.customer_last_name}
                        helperText={ touched.customer_last_name && errors.customer_last_name}
                      />
                      <TextField
                        fullWidth
                        type="text"
                        variant="standard"
                        label="Father/Husband first name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="father_first_name"
                        value={values.father_first_name}
                        error={!!touched.father_first_name && !!errors.father_first_name}
                        helperText={touched.father_first_name && errors.father_first_name}
                      />
                      <TextField
                        fullWidth
                        type="text"
                        variant="standard"
                        label="Father/Husband last name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        name="father_last_name"
                        value={values.father_last_name}
                        error={
                          !!touched.father_last_name && !!errors.father_last_name
                        }
                        helperText={
                          touched.father_last_name && errors.father_last_name
                        }
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: "20px",
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="standard"
                        type="text"
                        label="Occupation"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.occupation}
                        name="occupation"
                        error={
                          !!touched.occupation && !!errors.occupation
                        }
                        helperText={
                          touched.occupation && errors.occupation
                        }
                      />
                      <TextField
                        fullWidth
                        variant="standard"
                        type="date"
                        label="Date of birth"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.date_of_birth}
                        name="date_of_birth"
                        error={
                          !!touched.date_of_birth && !!errors.date_of_birth
                        }
                        helperText={
                          touched.date_of_birth && errors.date_of_birth
                        }
                      />
                      <TextField
                        fullWidth
                        variant="standard"
                        type="number"
                        label="Age"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.age}
                        name="age"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              Years
                            </InputAdornment>
                          ),
                        }}
                        error={!!touched.age && !!errors.age}
                        helperText={touched.age && errors.age}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: "20px",
                      }}
                    >
                      <TextField
                        fullWidth
                        type="text"
                        variant="standard"
                        label="Address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.address}
                        name="address"
                        error={!!touched.address && !!errors.address}
                        helperText={touched.address && errors.address}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: "20px",
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="standard"
                        type="number"
                        label="Pincode"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          debouncedSearchPin(e.target.value)
                            .then((data) => {
                              if (data !== null) {
                                setFieldValue("city", data[0]);
                                setFieldValue("state", data[1]);
                                setFieldValue("country", data[2]);
                              } else {
                                console.log("Invalid PinCode !");
                              }
                            })
                            .catch((error) => {
                              console.error("Error:", error);
                            });
                        }}
                        value={values.pincode}
                        name="pincode"
                        error={!!touched.pincode && !!errors.pincode}
                        helperText={touched.pincode && errors.pincode}
                      />
                      <TextField
                        fullWidth
                        variant="standard"
                        type="text"
                        label="City"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.city}
                        name="city"
                        error={!!touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                      />
                      <TextField
                        fullWidth
                        variant="standard"
                        type="text"
                        label="State"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.state}
                        name="state"
                        error={!!touched.state && !!errors.state}
                        helperText={touched.state && errors.state}
                      />
                      <TextField
                        fullWidth
                        variant="standard"
                        type="text"
                        label="Country"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.country}
                        name="country"
                        error={!!touched.country && !!errors.country}
                        helperText={touched.country && errors.country}
                      />
                      <TextField
                        fullWidth
                        variant="standard"
                        type="text"
                        label="PAN No"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.pan_no}
                        name="pan_no"
                        error={!!touched.pan_no && !!errors.pan_no}
                        helperText={touched.pan_no && errors.pan_no}
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
                            type="number"
                            label="Mobile Number"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.mobile_no}
                            name="mobile_no"
                            error={
                            !!touched.mobile_no && !!errors.mobile_no
                            }
                            helperText={
                            touched.mobile_no && errors.mobile_no
                            }
                        />
                        <TextField
                            fullWidth
                            variant="standard"
                            type="email"
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}
                            helperText={touched.email && errors.email}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
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
  );
};

const checkoutSchema = yup.object().shape({
  associate_id: yup.string().required("Required"),
  branch: yup.string().required("Required"),
  product_name: yup.string().required("Required"),
  customer_first_name: yup.string().required("Required"),
  customer_last_name: yup.string().required("Required"),
  father_first_name: yup.string().required("Required"),
  father_last_name: yup.string().required("Required"),
  address: yup.string().required("Required"),
  occupation: yup.string().required("Required"),
  date_of_birth: yup.string().required("Required"),
  age: yup.string().required("Required"),
  pincode: yup.string().required("Required"),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  country: yup.string().required("Required"),
  mobile_no: yup.string().required("Required"),
  pan_no: yup
    .string()
    .required("Required"),
  email: yup.string().email("Email is not Valid").required("required"),
});
// const initialValues = {
//   associate_id: "",
//   branch: "",
//   product_name: "",
//   customer_first_name:'',
//   customer_last_name: "",
//   father_first_name: "",
//   father_last_name: "",
//   date_of_birth: "1980-09-12",
//   age: "",
//   pincode: "",
//   city: "",
//   state: "",
//   country: "",
//   mobile_no: "",
//   pan_no: "",
//   email: "",

// };

export default CustomerDetails;
