import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { SidebarContext } from '../Context/sidebarContext';

export default function PrimarySearchAppBar() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggled, handleToggle } = useContext(SidebarContext)
  console.log(toggled)
  return (

    <Box sx={{ mt: 2, mb: 1, flexGrow: 1,}} 
    display="flex" 
    justifyContent="space-between" 
    backgroundColor={colors.grey[700]}
    
    >
      <Box display="flex" alignItems="center">
        <IconButton
          onClick={handleToggle}
          size="large"
          edge="start"
          color={colors.grey[100]}
          aria-label="open drawer"
          sx={{ ml: 2, mt: 2, mr: 2, mb: 2, display: { sm: 'flex', md: 'none' } }}
          style={{
            borderRadius: "50%",
            background: colors.toggle[200],
            boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}
          size="large"
          color={colors.grey[100]}
          sx={{
            
            ":hover": {
              color: colors.blueAccent[500]
            }
          }}
          style={{
            borderRadius: "50%",
            background: colors.grey[700],
            boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
          }}

        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box >
  );
}
