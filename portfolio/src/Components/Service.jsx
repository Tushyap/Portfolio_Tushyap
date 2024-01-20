import React from "react";
import { tokens } from "../theme";
import { Box, Typography, useTheme, Grid } from "@mui/material";
import Lottie from "lottie-react";
import webDevAnimation from "../assets/WebDevAnimation.json"
import webDesignAnimation from "../assets/WebDesignAnimation.json"
import contentAnimation from "../assets/ContentAnimation.json"

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, doloremque architecto! Non distinctio quas atque ex
                    ratione temporibus doloribus consequuntur libero esse,
                    pariatur culpa corrupti ipsam dolor quae nulla numquam
                    accusamus soluta exercitationem impedit. Quia inventore
                    minus hic. Repellat, quo?
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} marginTop="10px">
              <Box
                sx={{
                  flexGrow: 1,
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
                      width: "280px",
                      height: "280px",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} marginTop="10px">
              <Box
                sx={{
                  flexGrow: 1,
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, doloremque architecto! Non distinctio quas atque ex
                    ratione temporibus doloribus consequuntur libero esse,
                    pariatur culpa corrupti ipsam dolor quae nulla numquam
                    accusamus soluta exercitationem impedit. Quia inventore
                    minus hic. Repellat, quo?
                  </Typography>
                </Box>
              </Box>
            </Grid>

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, doloremque architecto! Non distinctio quas atque ex
                    ratione temporibus doloribus consequuntur libero esse,
                    pariatur culpa corrupti ipsam dolor quae nulla numquam
                    accusamus soluta exercitationem impedit. Quia inventore
                    minus hic. Repellat, quo?
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} marginTop="10px">
              <Box
                sx={{
                  flexGrow: 1,
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
