import { Box, Paper, Typography, Button } from '@mui/material'
import React from 'react'
import thankyou from '../../assets/images/thankyou.jpg'
import { Link } from 'react-router-dom'

const ThankyouForm = () => {
  return (
    <>
        <Box sx={{marginTop:'10px', maxWidth:'500px', mx:'auto'}}>
            <Paper sx={{padding:'15px 20px'}}>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Box sx={{display:'flex', flexDirection:'column', gap:'10px'}}>
                        <Typography variant='h3' color='primary'>
                            Thank You for Your Submission
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column', gap:'10px', mt:1}}>
                        <Typography>Dear Associate-name</Typography>
                        <Typography>
                            Thank you for reaching out to us and submitting your request for an executive.
                            We appreciate your interest in our services, and we're eager to assist you.
                        </Typography>
                        <Typography>
                        Your request has been placed on hold for 2hrs. 
                        Please reach office within 2 hrs and complete the remaining process.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            backgroundImage: `url(${thankyou})` , // Use the imported image variable here
                            backgroundSize: 'contain', // Set background properties as needed
                            width: '100%', // Set the width of the Box to occupy the full width
                            height: '200px', // Set the desired height of the Box
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                        }}
                    >
                    </Box>
                    <Box sx={{display:'flex', justifyContent:'center',}}>
                        <Link to='/'>
                            <Button
                                type="button"
                                sx={{ margin: "20px 0px" }}
                                variant="outlined"
                            >
                                Go to Dashboard
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </Box>
    </>
  )
}

export default ThankyouForm