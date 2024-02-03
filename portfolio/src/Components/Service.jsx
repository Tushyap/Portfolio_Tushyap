import React from "react";
import { tokens } from "../theme";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import Lottie from "lottie-react";
import webDevAnimation from "../assets/WebDevAnimation.json";
import webDesignAnimation from "../assets/WebDesignAnimation.json";
import contentAnimation from "../assets/ContentAnimation.json";

const Service = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
      <Grid container width="90%" height="100%" marginTop="20px">
        <Grid item xs={12} md={12} marginTop="20px">
          <Typography
            variant="h2"
            sx={{
              color: colors.blueAccent[400],
              fontWeight: "500",
            }}
          >
            Services
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: colors.greenAccent[400],
              fontWeight: "500",
              marginBottom: "25px",
            }}
          >
            "Elevate Your Digital Experience: Where Innovation Meets Expertise!"
          </Typography>
          <Grid container spacing={1} marginTop="20px">
            <Grid item xs={12} md={6} marginTop="10px">
              <Box
                sx={{
                  flexGrow: 1,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box marginTop="20px">
                  <Typography
                    variant="h3"
                    sx={{
                      color: colors.greenAccent[400],
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    Web App/Site Development
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: colors.grey[200],
                      fontWeight: "400",
                      marginTop: "20px",
                    }}
                  >
                    Welcome to a fusion of innovation and functionality! As a
                    proficient web app developer specializing in ReactJS and the
                    latest web technologies, I craft cutting-edge solutions for
                    a dynamic online presence. With expertise in creating
                    responsive and feature-rich applications, I am dedicated to
                    delivering innovative and scalable solutions that elevate
                    user experiences. Transform your vision into a seamless
                    digital reality with my skills.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              marginTop="30px"
              sx={{
                boxShadow: `rgba(0, 0, 0, 0.15) 3.4px 3.4px 4.2px`,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  paddingBottom: "20px",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} ,-4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <Lottie
                    animationData={webDevAnimation}
                    style={{
                      width: "260px",
                      height: "260px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              marginTop="5px"
              sx={{
                boxShadow: `rgba(0, 0, 0, 0.15) -3.4px -3.4px 3.2px`,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  paddingTop: "20px",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} ,-4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <Lottie
                    animationData={webDesignAnimation}
                    style={{
                      width: "280px",
                      height: "280px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} marginTop="30px">
              <Box
                sx={{
                  flexGrow: 1,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box marginTop="20px">
                  <Typography
                    variant="h3"
                    sx={{
                      color: colors.greenAccent[400],
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    UI/UX Design
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: colors.grey[200],
                      fontWeight: "400",
                      marginTop: "20px",
                    }}
                  >
                    Elevate your digital vision with my expertise in crafting
                    intuitive wireframes and stunning UI/UX designs. Using tools
                    like Balsamiq and Draw.io, I bring your concepts to life
                    with precision and creativity. Transforming ideas into
                    visually compelling and user-friendly interfaces, I ensure a
                    seamless and engaging digital experience for your audience.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} marginTop="30px">
              <Box
                sx={{
                  flexGrow: 1,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box marginTop="20px">
                  <Typography
                    variant="h3"
                    sx={{
                      color: colors.greenAccent[400],
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    Content Creation
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: colors.grey[200],
                      fontWeight: "400",
                      marginTop: "20px",
                    }}
                  >
                    Dive into the world of web development with{" "}
                    <a
                      href="https://www.youtube.com/channel/UCrJ__AaDNDh97-KCvK8Oufg"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: colors.blueAccent[500],
                      }}
                    >
                      Your Placement Buddies
                    </a>{" "}
                    on YouTube! As your dedicated content creator, I bring you
                    engaging videos covering the latest in web development
                    trends, tutorials, and industry insights. Join the community
                    for a learning experience that fuels your passion for
                    creating impactful and innovative web solutions. Subscribe
                    now!
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              marginTop="10px"
              sx={{
                boxShadow: `rgba(0, 0, 0, 0.15) 3.4px 3.4px 4.2px`,
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  paddingBottom: "20px",
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} ,-4px -5px 6px ${colors.toggle[300]}`,
                  }}
                >
                  <Lottie
                    animationData={contentAnimation}
                    style={{
                      width: "280px",
                      height: "280px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Service;
