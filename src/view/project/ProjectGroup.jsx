import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

const ProjectGroup = () => {

  const addProjectColumn = [
    { field: 'id', headerName: 'ID', minWidth: 100, },
    { field: 'projectName', headerName: 'Project Name', minWidth: 200,flex:1 },
    { field: 'date', headerName: 'Date', minWidth: 170, },
    
  ]
  const addBlockColumn = [
    { field: 'id', headerName: 'ID', minWidth: 100 },
    { field: 'projectName', headerName: 'Project Name', minWidth: 200, flex:1 },
    { field: 'block', headerName: 'Block', minWidth: 170, },
  ]

  const addPlotColumn = [
    { field: 'id', headerName: 'ID', minWidth: 100 },
    { field: 'projectName', headerName: 'Project Name', minWidth: 200, flex:1 },
    { field: 'block', headerName: 'Block', minWidth: 120},
    { field: 'plotNoFrom', headerName: 'Plot No. From', minWidth: 160 },
    { field: 'plotNoTo', headerName: 'Plot No. To', minWidth: 150},
  ]
  
  const addPlotReportColumn = [
    { field: 'id', headerName: 'ID', minWidth: 50 },
    { field: 'projectName', headerName: 'Project Name', minWidth: 200, flex:1},
    { field: 'block', headerName: 'Block', minWidth: 120 },
    { field: 'plotNo', headerName: 'Plot No.', minWidth: 120 },
    { field: 'dimension', headerName: 'Dimension', minWidth: 150 },
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
    
  }

  const handleEdit = () =>{
    console.log("Edited");
  }

   
  return (
    <Outlet context={{addProjectColumn, addBlockColumn, addPlotColumn, addPlotReportColumn}}/>
  )
}

export default ProjectGroup