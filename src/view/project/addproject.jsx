import { Box, Paper, Typography, TextField, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { Formik } from "formik";
import * as yup from "yup";
import React from 'react'
import { useState } from 'react';


const columns = [
    { field: 'id', headerName: 'ID', width: 85 },
    { field: 'projectName', headerName: 'Project name', width: 200},
    { field: 'date', headerName: 'Date', width: 130 }
    
  ];


const AddProject = () => {

    const [newProjectName, setNewProjectName] = useState("");
    const [projects, setProjects] = useState([]);
    
    const handleFormSubmit = (values) => {
        // Create a new project object with the entered project name
        const newProject = {
            id: projects.length + 1, // Generate a new ID
            projectName: values.project_name,
            date: new Date().toLocaleDateString(),
        };

        // Add the new project to the list of projects
        setProjects([...projects, newProject]);

        // Clear the input field
        setNewProjectName("");
        
    }
  

    return (
        <>
            <Box>
                <Box sx={{display:'flex', flexDirection:'column', gap:'20px',}}>
                    <Box>
                        <Paper sx={{p:3}} elevation={4}>
                            <Typography variant='h5' color="primary">Add New Project</Typography>
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
                                        <Box sx={{display:'flex', flexDirection:'column', gap:'20px', mt:2}}>
                                            <Box sx={{display:'flex', alignItems:'center', gap:'20px'}}>
                                                <Typography >Project Name</Typography>
                                                <TextField
                                                    fullWidth
                                                    type='text'
                                                    variant='standard'
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    name="project_name"
                                                    value={values.project_name}
                                                    error={!!touched.project_name && !!errors.project_name}
                                                    helperText={touched.project_name && errors.project_name}
                                                    sx={{flex:1,}}
                                                />
                                            </Box>
                                            <Box sx={{display:'flex', gap:'20px', mt:1}}>
                                                <Button variant="contained" color="success" type='submit'> Submit</Button>
                                                <Button variant="outlined" color="error" onClick={handleReset} > Reset</Button>
                                            </Box> 
                                        </Box>
                                    </form>
                                )}
                            </Formik>
                        </Paper>
                    </Box>
                    <Box>
                        <Paper sx={{p:3, mt:3}} elevation={4}>
                            <Typography>Project Lists</Typography>
                            <Box  sx={{pt:1, mt:1}} >
                                <Box sx={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={projects}
                                        columns={columns}
                                        initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                        }}
                                        pageSizeOptions={[5, 10]}
                                        checkboxSelection
                                    />
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

const checkoutSchema = yup.object().shape({
    project_name: yup.string().required("Required"),
});

const initialValues = {
    project_name:'',
}
export default AddProject

