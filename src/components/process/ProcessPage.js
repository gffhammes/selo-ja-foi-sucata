import { Box } from '@mui/material'
import React from 'react'
import { HeroSection } from './HeroSection'
import { ProcessSteps } from './ProcessSteps'

export const ProcessPage = () => {
  return (    
    <Box sx={{ height: '100%', position: 'relative' }}>
      <HeroSection />
      <ProcessSteps />
    </Box>
  )
}
