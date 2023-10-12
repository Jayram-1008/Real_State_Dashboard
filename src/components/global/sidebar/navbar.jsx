import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Paper, IconButton, TextField, OutlinedInput, InputAdornment, Typography, FormControl, } from '@mui/material';
import Badge from '@mui/material/Badge';
import Notifications from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import { Search, KeyboardArrowDown, Close } from "@mui/icons-material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LogoLarge } from "./logo";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin, setName, setRole } from "../../../store/globalSlice";


const Navbar = ({ toggleCollapse, showDrawer }) => {

    const [searchText, setSearchText] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector((state) => state.global.name);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        dispatch(setLogin(false));
        dispatch(setName(null));
        dispatch(setRole(null));
        navigate('/login');
    };

    const searchSuggest = (event) => {
    }

    return (
        <>
            <Paper elevation={0} sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', padding: { xs: "10px 20px", md: "10px 30px" }, borderRadius: "0px", borderBottom: "solid 1px #b8b7b6" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "0px" }}>
                    <IconButton
                        sx={{ padding: "10px" }}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleCollapse || showDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: "block", md: "none" } }}>
                        <LogoLarge />
                    </Box>
                </Box>
                <FormControl variant="outlined" sx={{ flex: 1, alignItems: "center", maxWidth: "40%", display: { xs: "none", md: "block" } }}>
                    <OutlinedInput
                        sx={{ height: "40px", width: "100%" }}
                        placeholder="Search..."
                        value={searchText}
                        onChange={searchSuggest}
                        id="outlined-adornment-search"
                        startAdornment={
                            <InputAdornment position="start">

                            </InputAdornment>
                        }
                        endAdornment={
                            <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                                <Search />
                            </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            "aria-label": "weight"
                        }}
                    />
                </FormControl>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '15px', md: '25px' } }}>
                    <IconButton
                        label={`show 1 new notifications`}
                        color="primary"
                    >
                        <Badge badgeContent="1" color="error">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <Typography variant="h5" sx={{ display: { xs: "none", md: "block" }, textTransform: "capitalize" }}>Hi ! {name.payload}</Typography>
                    <IconButton sx={{ padding: "0px" }} onClick={handleClick}>
                        <Avatar>{name.payload}</Avatar>
                        <KeyboardArrowDown />
                    </IconButton>
                </Box>
            </Paper>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </>
    )
}

export default Navbar