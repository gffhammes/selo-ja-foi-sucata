import { Box } from '@mui/material'
import React from 'react'
import { BottomSection } from './BottomSection'
import { CasesSection } from './CasesSection'
import { HeroSection } from './HeroSection'

export const BrandsAndCasesPage = () => {
  return (
    <Box>
      <HeroSection />
      <CasesSection />
      <BottomSection />
    </Box>
  )
}
