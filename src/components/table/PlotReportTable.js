import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

const rows = [
  { id: 1, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 2, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 3, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 5, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 34, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 337, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 377, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 347, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 3777, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 312777, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 37177, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 377777, projectName: 'Royal Empire', date:'12/10/2023', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  
  
];

export default function PlotReportTable({addPlotReportColumn, addProjectColumn, addPlotColumn, addBlockColumn}) {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
        
      <DataGrid
        rows={rows}
        columns={addPlotReportColumn||addProjectColumn || addBlockColumn|| addPlotColumn}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={!!addPlotReportColumn}
      />
    </Box>
  );
}