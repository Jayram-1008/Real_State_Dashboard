import { Box, Paper, Typography, TextField, Button, IconButton } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import { Formik } from "formik";
import * as yup from "yup";
import React from 'react'
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Header from '../../components/header';
import AddIcon from '@mui/icons-material/Add';
import PlotReportTable from '../../components/table/PlotReportTable';

const columns = [
    { field: 'id', headerName: 'ID', width: 85 },
    { field: 'projectName', headerName: 'Project name', width: 200},
    { field: 'date', headerName: 'Date', width: 130 }
    
  ];


const AddProject = () => {

    const {addProjectColumn} = useOutletContext();
    const {addPlotReportColumn} = useOutletContext();
    console.log(addProjectColumn)

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
            <Box sx={{display:'flex', flexDirection:'column', gap:'10px',}}>
                <Header title="Add Project"/>
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
                                    <Box sx={{display:'flex',  gap:'20px',alignItems:'center', }}>
                                        <TextField
                                            fullWidth
                                            type='text'
                                            variant='standard'
                                            label="Project Name"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            name="project_name"
                                            value={values.project_name}
                                            error={!!touched.project_name && !!errors.project_name}
                                            helperText={touched.project_name && errors.project_name}
                                        />
                                        <Box sx={{mt: 1}}>
                                            <Button variant="contained" color="primary" type='submit' size='small'>
                                                <AddIcon /> Add
                                            </Button>
                                        </Box>
                                    </Box>
                                </form>
                            )}
                        </Formik>
                    </Paper>
                </Box>
                <Box>
                    <Paper sx={{p:1,}}>
                        <Typography>Project Lists</Typography>
                        <Box  sx={{mt:1}} >
                            <PlotReportTable addProjectColumn={addProjectColumn}/>
                        </Box>
                    </Paper>
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

