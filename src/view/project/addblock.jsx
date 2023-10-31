import React, { useMemo, useState } from 'react';
import { Paper, Box, TextField,  Typography,  FormHelperText, useTheme, Button, IconButton} from '@mui/material';
import { Formik } from "formik";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as yup from "yup";
import { useOutletContext } from 'react-router-dom';
import Header from '../../components/header';
import AddIcon from '@mui/icons-material/Add';
import PlotReportTable from '../../components/table/PlotReportTable';
 

  const AddBlock = ()=>{
    
  const {addBlockColumn} = useOutletContext();
  
  const [selectProject, setSelectProject] = useState('');
  const [block, setBlock] = useState('');
  const [row, setRow] = useState([
    {
      id:"",
      projectName:'',
      block:'',
    }
]);

  const handleFormSubmit = (values) => {
      // Create a new project object with the entered project name
      // Add the new project to the list of projects

  }


  return (
    <>
      <Box sx={{display:'flex', flexDirection:'column', gap:'10px',}}>
        <Header title="Add Block"/>
        <Box>
            <Paper sx={{p:1}} >
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
                        handleSubmit,
                        handleChange,
                        handleReset
                    }) =>(
                        <form onSubmit={handleSubmit}>
                          <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, gap:'10px',alignItems:'center', }}>
                            <FormControl fullWidth variant='standard'>
                              <InputLabel id="select-blood-group">Select Project</InputLabel>
                              <Select
                                  label="Mode of booking"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.select_project}
                                  name="select_project"
                                  error={!!touched.select_project && !!errors.select_project}
                              >
                                <MenuItem value="N/A">N/A</MenuItem>
                                <MenuItem value="Token">Token</MenuItem>
                                <MenuItem value="Agreement">Agreement</MenuItem>
                                <MenuItem value="Full Amount">Full Amount</MenuItem>
                              </Select>
                              <FormHelperText error={!!touched.select_project && !!errors.select_project}>
                                  {touched.select_project && errors.select_project}
                              </FormHelperText>
                            </FormControl>
                            <TextField
                                fullWidth
                                type='text'
                                variant='standard'
                                label="Block Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                name="block_name"
                                value={values.block_name}
                                error={!!touched.block_name && !!errors.block_name}
                                helperText={touched.block_name && errors.block_name}
                            />
                            <Box sx={{mt: 1, flex:1}}>
                              <Button variant="contained" color="primary" type='submit' size='small'>
                                <AddIcon />&nbsp;Add
                              </Button>
                            </Box>
                          </Box>
                        </form>
                    )}
                </Formik>
            </Paper>
        </Box>
        <Box>
          <Paper sx={{p:1,}} >
            <Typography>Project Lists</Typography>
            <Box  sx={{pt:1}} >
                <PlotReportTable addBlockColumn={addBlockColumn}/>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
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

export default AddBlock