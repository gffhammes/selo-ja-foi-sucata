import { Box } from '@mui/material'
import React from 'react'
import { defaultPaddingTop } from '../../constants/pagesStyle'
import { BrandsAndCasesPreFooter } from '../commons/PreFooter'
import { BottomSection } from './BottomSection'
import { BrandsSection } from './BrandsSection'
import { CasesSection } from './CasesSection'
import { HeroSection } from './HeroSection'

export const BrandsAndCasesPage = () => {
  return (
    <Box>
      <HeroSection />      
      <CasesSection />
      <BottomSection />
      <BrandsAndCasesPreFooter />
    </Box>
  )
}
