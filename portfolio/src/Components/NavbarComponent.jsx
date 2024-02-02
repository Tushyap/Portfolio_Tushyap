import * as React from "react";
import { Box, Chip, Avatar, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { SidebarContext } from "../Context/sidebarContext";
import iconImage from "../assets/Tushyap.jpeg";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogIn } from "react-icons/bi";

export default function PrimarySearchAppBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggled, handleToggle } = useContext(SidebarContext);
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();
  console.log(user, "user details");
  console.log(isAuthenticated, "isauthenticated");
  console.log(toggled);
  return (
    <Box
      sx={{ mt: 2, mb: 1, flexGrow: 1 }}
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
          sx={{
            ml: 2,
            mt: 2,
            mr: 2,
            mb: 2,
            display: { sm: "flex", md: "none" },
          }}
          style={{
            borderRadius: "50%",
            background: colors.toggle[200],
            boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Chip
          avatar={<Avatar alt="Tushyap Bari" src={iconImage} />}
          label="Tushyap"
          variant="filled"
          size="medium"
          sx={{
            mt: 2,
            mr: 2,
            mb: 2,
            background: colors.toggle[200],
            boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
          }}
        />
      </Box>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        {isAuthenticated ? (
          <Button
            endIcon={<RiLogoutCircleRLine />}
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            sx={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "8px",
              paddingRight: "8px",
              borderRadius: "10px",
              marginRight: "14px",
              width: "130px",
              color: colors.blueAccent[500],
              backgroundColor: colors.toggle[200],
              boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
              ":hover": {
                color: colors.greenAccent[500],
              },
            }}
          >
            <Typography
              sx={{
                ":hover": {
                  color: colors.greenAccent[500],
                },
              }}
              variant="h4"
              fontWeight="initial"
            >
              {user.name}
            </Typography>
          </Button>
        ) : (
          <Button
            endIcon={<BiLogIn />}
            onClick={() => loginWithRedirect()}
            sx={{
              paddingTop: "10px",
              paddingBottom: "10px",
              paddingLeft: "8px",
              paddingRight: "8px",
              borderRadius: "10px",
              width: "130px",
              marginRight: "14px",
              color: colors.blueAccent[500],
              backgroundColor: colors.toggle[200],
              boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
              ":hover": {
                color: colors.greenAccent[500],
              },
            }}
          >
            <Typography
              sx={{
                ":hover": {
                  color: colors.greenAccent[500],
                },
              }}
              variant="h4"
              fontWeight="initial"
            >
              Login
            </Typography>
          </Button>
        )}
        <IconButton
          onClick={colorMode.toggleColorMode}
          size="large"
          color={colors.grey[100]}
          sx={{
            ":hover": {
              color: colors.blueAccent[500],
            },
          }}
          style={{
            borderRadius: "50%",
            background: colors.grey[700],
            boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
          }}
        >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}
