import { Box } from '@mui/material'
import React from 'react'
import { HeroSection } from './HeroSection'
import { SeloSection } from './SeloSection'

export const AboutPage = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <HeroSection />
      <SeloSection />
    </Box>
  )
}
