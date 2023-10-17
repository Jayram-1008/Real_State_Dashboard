import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

const rows = [
  { id: 1, projectName: 'Royal Empire', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 2, projectName: 'Royal Empire', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  { id: 3, projectName: 'Royal Empire', block: 'D', plotNo: 35, dimension:2323,status:'Vacent'},
  
];

export default function PlotReportTable({addPlotReportColumn}) {
  return (
    <Box sx={{ height: '100% ', width: '100%' }}>
        
      <DataGrid
        rows={rows}
        columns={addPlotReportColumn}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Box>
  );
}