import React, {useState} from 'react'
import {Table, Paper, Box, } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'id', label: 'ID', minWidth: 170 },
    { id: 'projectName', label: 'Project Name', minWidth: 100 },
    { id: 'block', label: 'Block', minWidth: 170, align: 'center'},
];

function createData(id, projectName, block) {
    return { id, projectName, block };
}

const rows = [
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    createData('India', 'City Mall', "ED"),
    
];

  
const CustomTable = (props) => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {/* Here execute only one block at a time as per click */}
                        {props.addProjectColumn &&  props.addProjectColumn.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth, backgroundColor: '#1976D2', color: 'white' }}
                        >
                            {column.label}
                        </TableCell>
                        ))}

                        {props.addBlockColumn &&  props.addBlockColumn.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth, backgroundColor: '#1976D2', color: 'white' }}
                        >
                            {column.label}
                        </TableCell>
                        ))}

                        {props.addPlotColumn  &&  props.addPlotColumn.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth, backgroundColor: '#1976D2', color: 'white' }}
                        >
                            {column.label}
                        </TableCell>
                        ))}

                    </TableRow>
                </TableHead>
                <TableBody>
                {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            {props.addProjectColumn && props.addProjectColumn.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                                );
                            })} 
                            {props.addBlockColumn && props.addBlockColumn.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                                );
                            })} 
                            {props.addPlotColumn &&  props.addPlotColumn.map((column) => {
                                const value = row[column.id];
                                return (
                                <TableCell key={column.id} align={column.align}>
                                    {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                                );
                            })} 
                        </TableRow>
                    );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>
  )
}

export default CustomTable