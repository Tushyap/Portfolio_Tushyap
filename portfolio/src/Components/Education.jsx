import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Tooltip,
  Button,
} from "@mui/material";
import { tokens } from "../theme";
import { GrSend } from "react-icons/gr";
import bgImg from "../assets/graduation.png";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const { isAuthenticated } = useAuth0();
  const navigateTo = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center",
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginLeft="15px"
      marginBottom="15px"
    >
      <Grid
        container
        width="95%"
        height="100%"
        marginTop="50px"
        style={bgStyle}
      >
        <Grid item xs={12} md={12}>
          <Typography
            variant="h1"
            sx={{
              color: colors.blueAccent[400],
              fontWeight: "500",
            }}
          >
            Education
          </Typography>
          <Box marginTop="30px">
            <Typography
              variant="h2"
              sx={{
                color: colors.grey[100],
                fontWeight: "500",
              }}
            >
              B.Tech - Rajasthan Technical University Kota
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: colors.grey[100],
                marginTop: "6px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              Arya College Of Engineering & Research Center Jaipur Rajasthan
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              Full-Time | 2018 - 2022
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "10px",
              }}
            >
              CGPA : 9.24 / 10
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              GATE 2022 : AIR 11340
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography
              variant="h2"
              sx={{
                color: colors.grey[100],
                fontWeight: "500",
              }}
            >
              Class XII - CBSE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: colors.grey[100],
                marginTop: "6px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              Saraswati Vidya Mandir Sr. Sec. School Vivekanand Nagar Sultanpur
              UP
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              Full-Time | 2018
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              Percentage - 79%
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              Core Subjects - Physics, Chemistry, Mathematics
            </Typography>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: colors.grey[100],
                fontWeight: "500",
              }}
            >
              Class X - CBSE
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: colors.grey[100],
                marginTop: "6px",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              Saraswati Vidya Mandir Sr. Sec. School Vivekanand Nagar Sultanpur
              UP
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              Full-Time | 2016
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[500],
                marginTop: "6px",
              }}
            >
              CGPA : 9.2 / 10
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="30px"
          >
            <Tooltip title="Unlocking secrets - Please Login">
              <Button
                endIcon={<GrSend />}
                onClick={() =>
                  navigateTo(
                    "https://drive.google.com/drive/folders/1s4OBu2vCjnU0Ahn2Hy6lGzb3SdVfKTtx"
                  )
                }
                disabled={!isAuthenticated}
                sx={{
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  paddingLeft: "20px",
                  paddingRight: "18px",
                  borderRadius: "18px",
                  fontSize: "18px",
                  color: colors.blueAccent[500],
                  backgroundColor: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  ":hover": {
                    color: colors.greenAccent[500],
                    backgroundColor: colors.toggle[200],
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
                  View Required Documents
                </Typography>
              </Button>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
