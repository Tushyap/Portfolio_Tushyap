import { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Tab,
  Tabs,
  Grid,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { IoEye } from "react-icons/io5";
import CustomTabPanel from "./CustomeTabs";
import { tokens } from "../theme";
import { TbPoint } from "react-icons/tb";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);
  const gfgUrl = "https://auth.geeksforgeeks.org/user/baritushyap9120";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

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
      <Grid container width="90%" height="100%" marginTop="40px">
        <Grid item xs={12} md={12}>
          <Box>
            <Typography
              variant="h2"
              style={{
                fontWeight: "initial",
                letterSpacing: "1px",
                marginTop: "20px",
              }}
              color={colors.blueAccent[300]}
              paddingTop="10px"
              paddingLeft="10px"
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontWeight: "initial",
                fontStyle: "italic",
                marginTop: "30px",
              }}
              color={colors.grey[200]}
              paddingLeft="10px"
            >
              "An enthusiastic web developer with over 2 years of industry
              experience, I bring a dynamic skill set and a passion for creating
              innovative digital solutions. Proficient in a range of
              technologies, I specialize in crafting responsive and user-centric
              web applications. My expertise extends across front-end
              development using React, as well as back-end technologies
              including Java, Node.JS, SpringBoot, and Microservices
              architecture. With a strong foundation in DBMS & MySQL. I am
              committed to delivering high-quality, scalable, and efficient web
              experiences that meet and exceed client expectations. Let's
              collaborate to turn your digital ideas into reality!"
            </Typography>
          </Box>
          <Box marginTop="30px">
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Tabs
                sx={{
                  bgcolor: colors.toggle[200],
                }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                centered
              >
                <Tab
                  sx={{
                    bgcolor: colors.toggle[200],
                    color: colors.greenAccent[400],
                    fontSize: "18px",
                    textTransform: "capitalize",
                  }}
                  label="Experience"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    bgcolor: colors.toggle[200],
                    color: colors.greenAccent[400],
                    fontSize: "18px",
                    textTransform: "capitalize",
                    marginLeft: "10px",
                  }}
                  label="Skills"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    bgcolor: colors.toggle[200],
                    color: colors.greenAccent[400],
                    fontSize: "18px",
                    textTransform: "capitalize",
                    marginLeft: "10px",
                  }}
                  label="Education"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
            <Box sx={{ marginTop: "10px" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  Project Engineer
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "4px",
                  }}
                >
                  C-DAC - Noida
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Full-Time | Feb 2024 
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.greenAccent[400],
                    marginTop: "10px",
                  }}
                  fontWeight="400"
                >
                  Key Skills - Java, SpringBoot, MicroServices, Postman ...
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
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
                  variant="h5"
                  sx={{
                    color: colors.greenAccent[400],
                    marginTop: "10px",
                  }}
                  fontWeight="400"
                >
                  Key Skills - React.JS, JavaScript, Java, SpringBoot,
                  MicroServices, Postman ...
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
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
                  variant="h5"
                  sx={{
                    color: colors.greenAccent[400],
                    marginTop: "10px",
                  }}
                  fontWeight="400"
                >
                  Key Skills - MERN Stack - React.JS, JavaScript ...
                </Typography>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  Web Development
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.greenAccent[400],
                    marginTop: "30px",
                  }}
                >
                  Frontend Web Development
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                    fontWeight: "400",
                  }}
                >
                  React.JS, JavaScript, Redux - Toolkit, Material-UI, RESTful
                  API Integration
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                    fontWeight: "400",
                  }}
                >
                  JWT, Auth0, Appwrite, Git, GitHub, BootStrap, Responsive App
                  Development
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.greenAccent[400],
                    marginTop: "40px",
                  }}
                >
                  Backend Web Development
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                    fontWeight: "400",
                  }}
                >
                  Java, SpringBoot, MicroServices, AWS, MySQL, Postman, RESTful
                  APIs
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                    fontWeight: "400",
                  }}
                >
                  JWT, Data Modelling, Git, GitHub
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: colors.greenAccent[400],
                    marginTop: "40px",
                  }}
                >
                  Problem Solving - Data Structures & Algo
                </Typography>
                <List>
                  <ListItem
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
                      300+ Problems Solved on GeeksforGeeks 2022-23
                    </ListItemText>
                  </ListItem>
                  <ListItem
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
                      3* Sql on Hackerrank
                    </ListItemText>
                  </ListItem>
                  <ListItem
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
                      4* Java on Hackerrank
                    </ListItemText>
                  </ListItem>
                </List>
                <a
                  href={gfgUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    margin: "10px",
                    color: colors.blueAccent[500],
                    textDecoration: "none",
                    backgroundColor: colors.toggle[200],
                  }}
                >
                  <Button
                    startIcon={<IoEye />}
                    sx={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      borderRadius: "10px",
                      width: "100px",
                      color: colors.blueAccent[500],
                      backgroundColor: colors.toggle[200],
                      boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`,
                      ":hover": {
                        color: colors.greenAccent[500],
                      },
                    }}
                  >
                    View
                  </Button>
                </a>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  B.Tech - Rajasthan Technical University Kota
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "4px",
                  }}
                >
                  Arya College Of Engineering & Research Center Jaipur Rajasthan
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Full-Time | 2018 - 2022
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "10px",
                  }}
                >
                  CGPA : 9.24 / 10
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  GATE 2022 : AIR 11340
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  Class XII - CBSE
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Saraswati Vidya Mandir Sr. Sec. School Vivekanand Nagar
                  Sultanpur UP
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Full-Time | 2018
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  PCM - 79%
                </Typography>
              </Box>
              <Box sx={{ marginTop: "30px" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.blueAccent[400],
                    fontWeight: "500",
                  }}
                >
                  Class X - CBSE
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Saraswati Vidya Mandir Sr. Sec. School Vivekanand Nagar
                  Sultanpur UP
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  Full-Time | 2016
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.grey[200],
                    marginTop: "6px",
                  }}
                >
                  CGPA : 9.2 / 10
                </Typography>
              </Box>
            </CustomTabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
