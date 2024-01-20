import React from 'react'
import { tokens } from "../theme";
import { Box, Typography, useTheme, Grid,  IconButton } from '@mui/material';
import { TbBrandHtml5 } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoCss3 } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FiDatabase } from "react-icons/fi";
import { SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiAppwrite } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiEclipseide } from "react-icons/si";
import { FaBitbucket } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import SkillProgress from './SkillProgress';

const Skills = () => {
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
      <Grid container width="90%" height="100%" marginTop="40px">
        <Grid item xs={12} md={12}>
          <Typography
            variant='h2'
            sx={{
              color: colors.blueAccent[400],
              fontWeight: "500"
            }}
          >
            Web Development
          </Typography>
          <Typography
            variant='h3'
            sx={{
              color: colors.grey[200],
              marginTop: "10px",
              marginBottom: "20px"
            }}
          >
            Frontend Web Development
          </Typography>
          <Grid
            container
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{
                flexGrow: 1,
              }}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <GrReactjs />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiRedux />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <IoLogoJavascript />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <TbBrandHtml5 />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <BiLogoCss3 />
                </IconButton>
              </Box>
              <Box marginTop="30px" >
                <SkillProgress skill="React" value="80" />
                <SkillProgress skill="JavaScript" value="80" />
                <SkillProgress skill="CSS" value="80" />
                <SkillProgress skill="Tailwind" value="70" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                flexGrow: 1,
              }}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <RiBootstrapLine />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiTailwindcss />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiMui />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <BiLogoNetlify />
                </IconButton>
              </Box>
              <Box marginTop="30px">
                <SkillProgress skill="Redux" value="70" />
                <SkillProgress skill="HTML" value="90" />
                <SkillProgress skill="BootStrap" value="80" />
                <SkillProgress skill="MUI" value="70" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant='h3'
            sx={{
              color: colors.grey[200],
              marginTop: "10px",
              marginBottom: "20px"
            }}
          >
            Backend Web Development
          </Typography>
          <Grid
            container
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{
                flexGrow: 1,
              }}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaJava />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiSpringboot />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiSpring />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <TbBrandMysql />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaAws />
                </IconButton>
              </Box>
              <Box marginTop="30px" >
                <SkillProgress skill="Java" value="70" />
                <SkillProgress skill="Spring" value="60" />
                <SkillProgress skill="MicroServices" value="60" />
                <SkillProgress skill="DSA" value="60" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                flexGrow: 1,
              }}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiPostman />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FiDatabase />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiMongodb />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaNodeJs />
                </IconButton>
              </Box>
              <Box marginTop="30px">
                <SkillProgress skill="SpringBoot" value="60" />
                <SkillProgress skill="MySQL" value="80" />
                <SkillProgress skill="DBMS" value="60" />
                <SkillProgress skill="Node.JS" value="70" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant='h3'
            sx={{
              color: colors.grey[200],
              marginTop: "10px",
              marginBottom: "20px"
            }}
          >
            Library, Technology & Tools Used
          </Typography>
          <Grid
            container
            spacing={2}
          >
            <Grid item xs={12} md={6}>
              <Box sx={{
                flexGrow: 1,
              }}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiAuth0 />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiReactrouter />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiAppwrite />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiPandas />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiEclipseide />
                </IconButton>
              </Box>
              <Box marginTop="30px" >
                <Box
                  sx={{
                    flexGrow: 1,
                    borderRadius: "10px",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                  marginTop="20px"
                  display="flex"
                  alignItems="center"
                  padding="10px"
                >
                  <Typography variant='h5' fontWeight="500" sx={{ color: colors.greenAccent[500] }}> Auth0  : </Typography>
                  <Typography variant="h6" marginLeft="10px" >Rapidly Integrate Authentication</Typography>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    borderRadius: "10px",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                  marginTop="20px"
                  display="flex"
                  alignItems="center"
                  padding="10px"
                >
                  <Typography variant='h5' fontWeight="500" sx={{ color: colors.greenAccent[500] }} > React Router Dom :</Typography>
                  <Typography variant="h6" marginLeft="10px" >It enables "client side routing".</Typography>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    borderRadius: "10px",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                  display="flex"
                  marginTop="20px"
                  alignItems="center"
                  padding="10px"
                >
                  <Typography variant='h5' fontWeight="500" sx={{ color: colors.greenAccent[500] }} > Postman  - </Typography>
                  <Typography variant="h6" marginLeft="10px" >Test & Manage HTTP REST APIs</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                flexGrow: 1,
              }}
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <SiJira />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <TbBrandVscode />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaBitbucket />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <FaGithub />
                </IconButton>
                <IconButton
                  size="large"
                  sx={{
                    color: colors.greenAccent[400],
                    ":hover": {
                      color: colors.blueAccent[500]
                    }
                  }}
                  style={{
                    borderRadius: "50%",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                >
                  <BiLogoNetlify />
                </IconButton>
              </Box>
              <Box marginTop="30px" >
                <Box
                  sx={{
                    flexGrow: 1,
                    borderRadius: "10px",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                  marginTop="20px"
                  display="flex"
                  alignItems="center"
                  padding="10px"
                >
                  <Typography variant='h5' fontWeight="500" sx={{ color: colors.greenAccent[500] }}> Appwrite  : </Typography>
                  <Typography variant="h6" marginLeft="10px" > Backend platform for developing App</Typography>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    borderRadius: "10px",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                  marginTop="20px"
                  display="flex"
                  alignItems="center"
                  padding="10px"
                >
                  <Typography variant='h5' fontWeight="500" sx={{ color: colors.greenAccent[500] }} > Axios :</Typography>
                  <Typography variant="h6" marginLeft="10px" >Promise based HTTP client</Typography>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    borderRadius: "10px",
                    background: colors.toggle[200],
                    boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
                  }}
                  marginTop="20px"
                  display="flex"
                  alignItems="center"
                  padding="10px"
                >
                  <Typography variant='h5' fontWeight="500" sx={{ color: colors.greenAccent[500] }} > GitHub :</Typography>
                  <Typography variant="h6" marginLeft="10px" >for version control and collaboration</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Skills
