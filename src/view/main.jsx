import React, { useState } from 'react'
import { Box, Paper, Drawer, Button } from "@mui/material";
import Sidebar from '../components/global/sidebar/sidebar'
import Navbar from '../components/global/sidebar/navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {

    const { window } = "";
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawerWidth = !collapsed ? 250 : 85;

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Box
                    component="nav"
                    sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={collapsed}
                        onClose={toggleCollapse}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { sm: 'block', md: 'none' },
                            zIndex: 99,
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { sx: "250", md: drawerWidth } },
                        }}
                    >
                        <Sidebar />
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { sx: "250", md: drawerWidth } },
                        }}
                        open
                    >
                        <Sidebar collapsed={collapsed} />
                    </Drawer>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Navbar toggleCollapse={toggleCollapse} />
                    <Box sx={{ height: "calc(100vh - 65px)", width: "100%", padding: "15px", overflowX: "hidden", postition: "relative" }}>
                        <Outlet />
                    </Box>

                </Box>
            </Box>
        </>
    )
}

export default Main