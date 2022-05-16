import { Box } from '@mui/material'
import React from 'react'
import { AboutPreFooter } from '../commons/PreFooter'
import { HeroSection } from './HeroSection'
import { SeloSection } from './SeloSection'

export const AboutPage = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <HeroSection />
      <SeloSection />
      <AboutPreFooter />
    </Box>
  )
}
