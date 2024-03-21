import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const ANIMATION_DURATION = 0.2; 

export default function ProposeCard({ Data,click}) {
  return (
    <Box
        onClick={_=>click(Data?.id)}
      sx={{
        height: '100%',
        cursor: 'pointer',
        borderRadius:'5px', 
        transition: `transform ${ANIMATION_DURATION}s ease-in-out, box-shadow ${ANIMATION_DURATION}s ease-in-out`, // Combined transition for smooth animation
        '&:hover': {
          transform: 'scale(1.05)', 
          boxShadow: '0px 5px 10px rgba(200, 0, 200, 0.9)', 
        },
      }}
    >   
    <Box height={'100%'} >
        <Box height={'50%'} sx ={{display:'flex',justifyContent:'center',alignItems:'end' ,backgroundColor:'rgb(0,0,50)' }}>
        <Typography fontSize={'20px'} color={'#fff'}>Propose {Data?.data}</Typography>

        </Box>
        <Box height={'50%'} sx ={{ backgroundColor:'rgb(0,0,80)' }}></Box>
   </Box>
    {/* <Grid container height={'100%'}  >
        <Grid item height={'50%'} sm={12}   sx ={{borderRadius:'5px', backgroundColor:'rgb(0,0,50)' }} >

        </Grid>
        <Grid  height={'50%'} item sm={12}   sx ={{ backgroundColor:'rgb(0,0,100)' }} >

        </Grid>
    </Grid> */}
    </Box>
  );
}
