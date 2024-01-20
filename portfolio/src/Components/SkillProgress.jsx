import React from 'react'
import { tokens } from "../theme";
import { Box, Typography, useTheme, LinearProgress, } from '@mui/material';
const SkillProgress = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        flexGrow: 1,
        borderRadius: "10px",
        background: colors.toggle[200],
        boxShadow: `4px 5px 6px ${colors.toggle[100]} , -4px -5px 6px ${colors.toggle[300]}`
      }}
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      padding="10px"
      marginBottom="20px"
    >
      <Box>
        <Typography variant='h6' textAlign='center' >{props.skill}</Typography>
      </Box>
      <Box>
        <LinearProgress sx={{ width: "170px" }} color="secondary" variant="determinate" value={80} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="h6" textAlign="center">{props.value} %</Typography>
      </Box>
    </Box>
  )
}

export default SkillProgress
