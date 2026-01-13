import React from 'react'
import HeroSection from './HeroSection'
import EnhancingAgriculture from './EnhancingAgriculture'
import SeedsForAgriculture from './SeedsForAgriculture'
import ChairmanMessage from './Chairman'
import Explore from './Explore'
import ReseachDev from './ReseachDev'
import QualityManagement from './QualityManagement'
import Farmers from './Farmers'
import { Box } from '@mui/material'

function MainHomePage() {
  return (
    <Box>
        <HeroSection/>
        <EnhancingAgriculture/>
        <SeedsForAgriculture/>
        <ChairmanMessage/>
        <Explore/>
        <ReseachDev/>
        <QualityManagement/>
        <Farmers/>
    </Box>
  )
}

export default MainHomePage