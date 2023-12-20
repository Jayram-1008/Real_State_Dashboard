import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { LogoLarge } from '../components/global/sidebar/logo';

import CallIcon from '@mui/icons-material/Call';
import LanguageIcon from '@mui/icons-material/Language';
import SendIcon from '@mui/icons-material/Send';

function createData1(
   
    project_name,
    plot_no,
    area,
    booking_date,
    agreement_date
  
  ) {
    return { 
      project_name,
      plot_no,
      area,
      booking_date,
      agreement_date };
  }
  
  const rows1 = [
    createData1("Sundaram Project", 6 , 2100, new Date().toLocaleDateString(), new Date().toLocaleDateString()),
    
  ];
function createData2(
   
    slno,
    business_amount,
    mode,
    date,
    expenditure,
    total,
    status,
  
  ) {
    return { 
        slno,
        business_amount,
        mode,
        date,
        expenditure,
        total,
        status,
    };
  }
  
  const rows2 = [
    createData2(1, 281000, 'Cheque', '30/11/2023', '30%', 281000, 'Paid'),
    createData2(1, 281000, 'Cheque', '30/11/2023', '30%', 281000, 'Paid'),
    createData2(1, 281000, 'Cheque', '30/11/2023', '30%', 281000, 'Paid'),
    createData2(1, 281000, 'Cheque', '30/11/2023', '30%', 281000, 'Paid'),
    createData2(1, 281000, 'Cheque', '30/11/2023', '30%', 281000, 'Paid'),

  ];

const Invoice = () => {
  return (
    <>
        <Paper sx={{display:'flex', justifyContent:'center'}}>
            <Box sx={{padding:'10px', minWidth:'1000px' }}>
                <Typography variant='h4' sx={{textAlign:'center'}}>Customer Invoice</Typography>
                <hr style={{ border:'1px solid black', marginTop:'10px'}}></hr>
                <Box sx={{display:'flex', justifyContent:'space-between', marginTop:'15px'}}>
                    <Box>
                        <LogoLarge/>
                    </Box>
                    <Box>
                        <Typography variant='h4'>Invoice #09090</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', padding:'20px 10px'}}>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                       <Typography variant='h6'>BILL TO</Typography> 
                       <Typography variant='h6'>Client Name</Typography> 
                       <Typography variant='h6'>Client Address</Typography> 
                       <Typography variant='h6'>Country</Typography> 
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography variant='h6' sx={{textAlign:'right'}}>Issue Date: <span>{new Date().toLocaleDateString()}</span></Typography>
                        <Typography variant='h6'sx={{textAlign:'right'}}>Due Date:  <span>{new Date().toLocaleDateString()}</span></Typography>
                        <Typography variant='h6'sx={{textAlign:'right'}}>Reference:  <span>{123456}</span></Typography>
                    </Box>
                </Box>
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow sx={{ background: 'orange', }}>
                                <TableCell>Project Name</TableCell>
                                <TableCell>Plot No.</TableCell>
                                <TableCell>Area (sqft)</TableCell>
                                <TableCell>Booking Date</TableCell>
                                <TableCell>Agreement Date</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows1.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>{row.project_name}</TableCell>
                                <TableCell>{row.plot_no}</TableCell>
                                <TableCell>{row.area}</TableCell>
                                <TableCell>{row.booking_date}</TableCell>
                                <TableCell>{row.agreement_date}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

                <Box sx={{marginTop:'20px'}}>
                    <Box sx={{marginBottom:'5px'}}>
                        <Typography variant='h5' sx={{textAlign:'center'}}>Business Details</Typography>
                        <Typography variant='h6' sx={{textAlign:'center'}}>(Installment)</Typography>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow sx={{ background: 'orange', }}>
                                <TableCell>Sl. No.</TableCell>
                                <TableCell>Business Amount</TableCell>
                                <TableCell>Mode</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Expenditure</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows2.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell>{row.slno}</TableCell>
                                <TableCell>{row.business_amount}</TableCell>
                                <TableCell>{row.mode}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.expenditure}</TableCell>
                                <TableCell>{row.total}</TableCell>
                                <TableCell>{row.status}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box sx={{padding:'20px 10px', display:'flex', justifyContent:'space-between', }}>
                    <Box></Box>
                    <Box sx={{paddingRight:'50px'}}>
                        <Typography variant='h6' sx={{textAlign:'right'}}>Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <sapn> 2810</sapn> ₹</Typography>
                        <Typography variant='h6' sx={{textAlign:'right'}}>Sales Tax &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <sapn>4562</sapn> ₹</Typography>
                        <Typography variant='h5' sx={{textAlign:'right', marginTop:'10px'}}>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <sapn>25896</sapn> ₹</Typography>
                    </Box>
                </Box>
                <Box sx={{display:'flex', justifyContent:'space-between', marginTop:'50px'}}>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <CallIcon fontSize='small'/>
                        <Typography variant='p'>
                            +9494949844
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <LanguageIcon fontSize='small'/>
                        <Typography variant='p'>
                            www.youtube.com.au
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <SendIcon fontSize='small'/>
                        <Typography variant='p'>
                            email@gmail.com
                        </Typography>
                    </Box>
                </Box>
                <hr style={{border:'1px solid black', }}></hr>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='p'>Your Business Name</Typography>
                    <Typography variant='p'>Address</Typography>
                    <Typography variant='p'>Landmark</Typography>
                </Box>
            </Box>            
        </Paper>
    </>
  )
}



export default Invoice