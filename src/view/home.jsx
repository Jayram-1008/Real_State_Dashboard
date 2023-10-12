import React from 'react';
import { Box, Paper } from '@mui/material';
import CardBox from '../components/cardbox';
import Header from '../components/header';
import RecentHold from '../components/recenthold';

const Home = () => {
  return (
    <>
      <Box sx={{ padding: "10px" }}>
        <Header title="Dashboard" />
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "15px" }}>
          <Box sx={{ width: { xs: "100%", md: "65%" } }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "15px", margin: "15px 0px" }}>
              <CardBox title="Available Plots" number="40" subtitle="14 Booking for process" bgColor="#FFEFE7" txtColor="#FF5151" />
              <CardBox title="Available Hotels" number="24" subtitle="3 Booking for process" bgColor="#E8F0FB" txtColor="#3786F1" />
              <CardBox title="Available Flats" number="17" subtitle="10 Booking for process" bgColor="#FDEBF9" txtColor="#EE61CF" />
            </Box>
            <Header title="Booking" />
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "15px", margin: "15px 0px" }}>
              <CardBox title="Available Flats" number="17" subtitle="" bgColor="#F3E8FB" txtColor="#ba68c8" />
              <CardBox title="Available Hotels" number="24" subtitle="" bgColor="#EBFDED" txtColor="#2196f3" />
              <CardBox title="Available Plots" number="40" subtitle="" bgColor="#FFE7E7" txtColor="#ef5350" />
            </Box>
            <Header title="Recent Activity" />
          </Box>
          <Box sx={{ flex: 1, marginTop: "15px" }}>
            <RecentHold />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Home