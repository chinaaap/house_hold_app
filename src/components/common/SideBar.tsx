import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { NavLink } from 'react-router-dom';
import { CSSProperties } from 'react';

interface SideBarProps {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerToggle: () => void,
    handleDrawerTransitionEnd: () => void,
    handleDrawerClose: () => void,
}

interface menuItem {
    text: string,
    path: string,
    icon: React.ComponentType,
}

const SideBar = ({
    drawerWidth,
    mobileOpen,
    handleDrawerToggle,
    handleDrawerTransitionEnd,
    handleDrawerClose }:
    SideBarProps) => {

    const MenuItems: menuItem[] = [
        { text: "Home", path: "/", icon: HomeIcon },
        { text: "Report", path: "/report", icon: EqualizerIcon },
    ]

    const baseLinkStyle: CSSProperties = {
        textDecoration: "none",
        color: "inherit",
        display: "block",
    }

    const activeLinkStyle: CSSProperties = {
        backgroundColor: "rgba(0, 0, 0, 0.08)"
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {MenuItems.map((item, index) => (
                    <NavLink key={item.text} to={item.path} style={({ isActive }) => {
                        return {
                            ...baseLinkStyle,
                            ...(isActive ? activeLinkStyle : {})
                        }
                    }}>
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );
    return (
        <Box
            component="nav"
            sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
            aria-label="mailbox folders"
        >
            {/* SP用 */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onTransitionEnd={handleDrawerTransitionEnd}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
            {/* PC用 */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default SideBar
