import {
  Box,
  Typography,
  useTheme,
  List,
  ListItem,
  Grid,
  Tooltip,
  ListItemText,
  Button,
} from "@mui/material";
import { TbPoint } from "react-icons/tb";
import { tokens } from "../theme";
import { GrSend } from "react-icons/gr";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Experience = () => {
  const theme = useTheme();
  const { isAuthenticated } = useAuth0();
  const colors = tokens(theme.palette.mode);
  const globalLogicAssociate = [
    "Worked with React.js, Redux - Toolkit, Various JS Libraries, JavaScript, Rest APIs, Bootstrap,Tailwind css to develop robust and scalable Frontends.",
    "Develop the new functionality and features as per the requirement also maintain the documentation.",
    "Troubleshoot and fixed bugs and issues to ensure smooth operation of the applications.",
    "Coordinate with team and discuss technical problems, bugs and report the daily status to Reporting Manager.",
  ];

  const globalLogicTrainee = [
    "Worked with Spring Boot, Spring, Hibernate, Microservices, MySQL to develop scalable backends.",
    "Explored Data Engineering - Data Processing , ETL and monitored tidal jobs to ensure smooth BAU operations.",
    "Worked with Python, Pandas, SQL, Tidal, AWS - S3, Athena, DynamoDB, CloudWatch, Glue.",
    "Develop the new functionality and features as per the requirement also maintain the documentation.",
  ];

  const eceraSystem = [
    "Designed and developed a E-Learning web application which provides courses similar to Udemy, Coding Ninjas.",
    "Designed and developed dynamic and responsive webapps using MERN - React.js, JavaScript, HTML, CSS.",
    "My responsibility was develop responsive web pages using React, Bootstrap, HTML, CSS and Writing APIs and API Integration.",
  ];

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
      <Grid container width="95%" height="100%" marginTop="50px">
        <Grid item xs={12} md={12}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              flexGrow: 1,
              display: { sm: "block", lg: "flex" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: colors.blueAccent[400],
                fontWeight: "500",
              }}
            >
              Associate Software Engineer
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: colors.grey[200],
                marginTop: "4px",
              }}
            >
              GlobalLogic - A Hitachi Group Company
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: colors.grey[200],
                marginTop: "6px",
              }}
            >
              Full-Time | June 2022 - Nov 2023 | 1 Year 6 Months
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[400],
                marginTop: "10px",
                fontWeight: "500",
              }}
            >
              Key Responsibilities
            </Typography>
            <List>
              {globalLogicAssociate.map((responsibility) => {
                return (
                  <ListItem
                    key={responsibility}
                    sx={{
                      paddingBottom: "0px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingTop: "5px",
                    }}
                  >
                    <TbPoint
                      style={{
                        minWidth: "20px",
                        color: colors.greenAccent[300],
                      }}
                    />
                    <ListItemText
                      sx={{ color: colors.grey[200] }}
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "initial",
                        letterSpacing: 0,
                      }}
                    >
                      {responsibility}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
            <Typography
              variant="h4"
              sx={{
                color: colors.greenAccent[400],
                marginTop: "10px",
                fontWeight: "400",
              }}
            >
              Key Responsibilities as Trainee Software Engineer
            </Typography>
            <List>
              {globalLogicTrainee.map((responsibility) => {
                return (
                  <ListItem
                    key={responsibility}
                    sx={{
                      paddingBottom: "0px",
                      paddingLeft: "0px",
                      paddingRight: "0px",
                      paddingTop: "5px",
                    }}
                  >
                    <TbPoint
                      style={{
                        minWidth: "20px",
                        color: colors.greenAccent[300],
                      }}
                    />
                    <ListItemText
                      sx={{ color: colors.grey[200] }}
                      primaryTypographyProps={{
                        fontSize: 16,
                        fontWeight: "initial",
                        letterSpacing: 0,
                      }}
                    >
                      {responsibility}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginTop="10px"
              sx={{
                flexGrow: 1,
                display: { sm: "block", lg: "flex" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: colors.blueAccent[400],
                  fontWeight: "500",
                }}
              >
                Associate Software Engineer
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: colors.grey[200],
                  marginTop: "4px",
                }}
              >
                Ecera System LLC
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: colors.grey[200],
                  marginTop: "6px",
                }}
              >
                Internship | Nov 2021 - May 2022 | 7 Months
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: colors.greenAccent[400],
                  marginTop: "10px",
                  fontWeight: "500",
                }}
              >
                Key Responsibilities
              </Typography>
              <List>
                {eceraSystem.map((responsibility) => {
                  return (
                    <ListItem
                      key={responsibility}
                      sx={{
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        paddingTop: "5px",
                      }}
                    >
                      <TbPoint
                        style={{
                          minWidth: "20px",
                          color: colors.greenAccent[300],
                        }}
                      />
                      <ListItemText
                        sx={{ color: colors.grey[200] }}
                        primaryTypographyProps={{
                          fontSize: 16,
                          fontWeight: "initial",
                          letterSpacing: 0,
                        }}
                      >
                        {responsibility}
                      </ListItemText>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginTop="20px"
            >
              <Tooltip title="Unlocking secrets - Please Login">
                <Button
                  endIcon={<GrSend />}
                  disabled={!isAuthenticated}
                  sx={{
                    paddingTop: "15px",
                    paddingBottom: "15px",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    borderRadius: "20px",
                    fontSize: "18px",
                    color: colors.blueAccent[500],
                    backgroundColor: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                    ":hover": {
                      color: colors.greenAccent[500],
                    },
                  }}
                >
                  <Link
                    to="https://drive.google.com/drive/folders/1s4OBu2vCjnU0Ahn2Hy6lGzb3SdVfKTtx"
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherit" }}
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
                  </Link>
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
