import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import { tokens } from "../theme";
import Lottie from "lottie-react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { PiGithubLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiTwitterLogo } from "react-icons/pi";
import { PiPhoneCall } from "react-icons/pi";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import webAnimation from "../assets/webAnimation.json";
import Resume from "../assets/Tushyap React Developer.pdf";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigateTo = useNavigate();

  return (
    <Box
      sx={{ flexGrow: 1 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container width="90%" height="100%" marginTop="80px">
        <Grid item xs={12} md={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                style={{
                  fontWeight: "initial",
                  letterSpacing: "1px",
                  marginTop: "20px",
                }}
                color={colors.blueAccent[300]}
                paddingTop="10px"
                paddingLeft="20px"
              >
                Hi! My name is
              </Typography>
              <Typography
                variant="h1"
                style={{ fontWeight: "bold", marginTop: "5px" }}
                color={colors.grey[100]}
                paddingLeft="20px"
              >
                Tushyap Bari
              </Typography>
              <Typography
                variant="h2"
                style={{ fontWeight: "bold", marginTop: "5px" }}
                color={colors.grey[100]}
                paddingLeft="20px"
              >
                I build things for the web
              </Typography>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {/* <img
                alt="profile-user"
                width="200px"
                height="200px"
                src={Img}
                style={{
                  padding: "8px",
                  borderRadius: "50%",
                  backgroundColor: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                }}
              /> */}
              <Lottie
                animationData={webAnimation}
                style={{
                  width: "280px",
                  height: "280px",
                  padding: "8px",
                  borderRadius: "50%",
                  backgroundColor: colors.toggle[200],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                }}
              />
            </Box>
          </Box>

          <Grid item marginTop="20px">
            <Typography
              variant="h5"
              style={{
                fontWeight: "initial",
                fontStyle: "italic",
                marginTop: "30px",
              }}
              color={colors.grey[200]}
              padding="20px"
            >
              "An enthusiastic developer with experience in ReactJS, JavaScript,
              Java, Spring Boot, DBMS and AWS. Self-driven innovator with
              excellent Leadership and Management capabilities. A result driven
              professional with uncompromising work ethics acquired around 2
              years of experience in the software development industry."
            </Typography>
            <Box
              sx={{ flexGrow: 1 }}
              margin="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="20px"
            >
              <a
                href={Resume}
                download="Tushyap Bari - Frontend Developer"
                style={{
                  color: colors.blueAccent[500],
                  textDecoration: "none",
                  backgroundColor: colors.toggle[200],
                }}
              >
                <Button
                  endIcon={<FileDownloadOutlinedIcon />}
                  sx={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    borderRadius: "20px",
                    width: "210px",
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
                    Download CV
                  </Typography>
                </Button>
              </a>
            </Box>
          </Grid>
          <Box
            sx={{ flexGrow: 1 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              padding="10px"
              width="400px"
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              style={{
                color: colors.blueAccent[500],
                borderRadius: "20px",
                backgroundColor: colors.toggle[200],
                boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
              }}
            >
              <a
                href="https://github.com/Tushyap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  size="large"
                  sx={{
                    borderRadius: "50%",
                    margin: "8px",
                    background: colors.grey[700],
                    color: colors.blueAccent[500],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                    ":hover": {
                      color: colors.greenAccent[500],
                    },
                  }}
                >
                  <PiGithubLogo />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/tushyap-bari-1163431b4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  size="large"
                  sx={{
                    borderRadius: "50%",
                    margin: "8px",
                    background: colors.grey[700],
                    color: colors.blueAccent[500],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                    ":hover": {
                      color: colors.greenAccent[500],
                    },
                  }}
                >
                  <PiLinkedinLogo />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/tushyapbari/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  size="large"
                  sx={{
                    borderRadius: "50%",
                    margin: "8px",
                    background: colors.grey[700],
                    color: colors.blueAccent[500],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                    ":hover": {
                      color: colors.greenAccent[500],
                    },
                  }}
                >
                  <PiInstagramLogo />
                </IconButton>
              </a>
              <a
                href="https://twitter.com/TushyapB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  size="large"
                  sx={{
                    borderRadius: "50%",
                    margin: "8px",
                    color: colors.blueAccent[500],
                    background: colors.grey[700],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                    ":hover": {
                      color: colors.greenAccent[500],
                    },
                  }}
                >
                  <PiTwitterLogo />
                </IconButton>
              </a>
              <IconButton
                size="large"
                onClick={()=> navigateTo("/contacts")}
                sx={{
                  borderRadius: "50%",
                  margin: "8px",
                  color: colors.blueAccent[500],
                  background: colors.grey[700],
                  boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                  ":hover": {
                    color: colors.greenAccent[500],
                  },
                }}
              >
                <PiPhoneCall />
              </IconButton>
              <a
                href="https://www.youtube.com/channel/UCrJ__AaDNDh97-KCvK8Oufg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  size="large"
                  sx={{
                    borderRadius: "50%",
                    margin: "8px",
                    color: colors.blueAccent[500],
                    background: colors.grey[700],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                    ":hover": {
                      color: colors.greenAccent[500],
                    },
                  }}
                >
                  <PiYoutubeLogoLight />
                </IconButton>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
