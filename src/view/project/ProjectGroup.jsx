import { Button } from '@mui/material'
import {IconButton} from '@mui/material'
import { Edit } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const ProjectGroup = () => {

  const addProjectColumn = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'projectName', label: 'Project Name', minWidth: 100 },
    { id: 'date', label: 'Date', minWidth: 170, align: 'center' },
  ]
  const addBlockColumn = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'projectName', label: 'Project Name', minWidth: 100 },
    { id: 'block', label: 'Block', minWidth: 170, align: 'center' },
  ]

  const addPlotColumn = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'projectName', label: 'Project Name', minWidth: 100 },
    { id: 'block', label: 'Block', minWidth: 170, align: 'center'},
    { id: 'plotNoFrom', label: 'Plot No. From', minWidth: 170, align: 'center'},
    { id: 'plotNoTo', label: 'Plot No. To', minWidth: 170, align: 'center'},
  ]
  
  const addPlotReportColumn = [
    { field: 'id', headerName: 'ID', minWidth: 130 },
    { field: 'projectName', headerName: 'Project Name', minWidth: 200 },
    { field: 'block', headerName: 'Block', minWidth: 100 },
    { field: 'plotNo', headerName: 'Plot No.', minWidth: 100 },
    { field: 'dimension', headerName: 'Dimension', minWidth: 130 },
    { field: 'status', headerName: 'Status', minWidth: 130 },
  ]

  const [addProject, setAddProject] = useState({});
  const [addBlock, setAddBlock] = useState({});
  const [addPlot, setAddPlot] = useState({});
  const [addPlotReport, setAddPlotReport] = useState({});

  const [projectData, setProjectData] = useState([
    {
      id:'',
      projectName:'',
      date:'',
      block:'',
      plotName:'',
      plotNoFrom:'',
      plotNoTo:'',
      status:'',
      dimension:'',
    }
  ]);

  const handleSetFormData = () =>{
    setProjectData()
  }

  const handleEdit = () =>{
    console.log("Edited");
  }



   
  return (
    <Outlet context={{addProjectColumn, addBlockColumn, addPlotColumn, addPlotReportColumn}}/>
  )
}

export default ProjectGroup