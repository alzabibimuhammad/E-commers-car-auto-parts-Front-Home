import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ProposeCard from '../../../features/seller/propose/components/proposeCard'
import img from '../../../assets/all-images/Carmodel.svg'
import { useState } from 'react'
import ProposeCategory from '../../../features/seller/propose/components/proposeCategory'
import { UserContext } from '../../../components/Layout/Layout'
import ProposeModel from '../../../features/seller/propose/components/proposeModel'
import ProposeBrand from '../../../features/seller/propose/components/proposeBrand'

export default function Propose() {
  const [click,setClick] = useState(null)
  const user = useContext(UserContext)

  return (
    <Grid container  height={'70vh'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2} mb={2}>
    { !click&&
    <>
      <Grid item sm={4} md={4} xs={12} lg={4} sx={{ display:'flex',justifyContent:'center',alignItems:'center' }}  ><Box sx={{ height:'250px',width:'400px' }}><ProposeCard click={setClick} Data={{id:1,data:'Car model'} } /></Box></Grid>
      <Grid item sm={4} md={4} xs={12} lg={4} sx={{ display:'flex',justifyContent:'center',alignItems:'center' }} ><Box sx={{ height:'250px',width:'400px' }} ><ProposeCard click={setClick} Data={{id:2,data:'Category' } } /></Box></Grid>
      <Grid item sm={4} md={4} xs={12} lg={4} sx={{ display:'flex',justifyContent:'center',alignItems:'center' }} ><Box sx={{ height:'250px',width:'400px' }} ><ProposeCard click={setClick} Data={{id:3,data:'Brand' } } /></Box></Grid>
      </>
    }
    {click ==1 &&
      <Grid item sm={7} md={7} xs={9} lg={7}>

        <ProposeModel user={user} setClick={setClick}/>

        
      </Grid>
    }
    {click == 2 && user &&
      <Grid item sm={7} md={7} xs={9} lg={7}   >
        <ProposeCategory user={user} setClick={setClick}/>
      </Grid>
    }
        {click ==3 &&
      <Grid item sm={7} md={7} xs={9} lg={7}>
        
        <ProposeBrand user={user} setClick={setClick}/>
      </Grid>
    }
    
    
    </Grid>
  )

}
