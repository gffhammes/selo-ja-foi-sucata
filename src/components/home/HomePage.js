import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { BrandsSection } from './BrandsSection'
import { GalleryAndContact } from './GalleryAndContact'
import { HeroSection } from './HeroSection'
import { PinkSection } from './PinkSection'
import { ProcessSection } from './ProcessSection'
import { TransformationCard } from './TransformationCard'

export const HomePage = () => {
  return (
    <Box sx={{ height: '100%' }}>  
      <HeroSection />
      <Container maxWidth='sm' sx={{ py: 8 }} >
        <Typography variant='h5' textAlign='center' >
          <strong>Junto com a Mag.</strong> nós criamos e recriamos ilimitadamente, a partir de materiais que não teriam outro fim, se não o lixo!
        </Typography>
      </Container>
      <TransformationCard />
      <Container maxWidth='sm' sx={{ py: 8 }} >
        <Typography variant='h5' textAlign='center' >
          <strong>Do lixo ao luxo,</strong> ou melhor, da reciclagem ao sonho! Aqui o papelão se transforma e recebe uma nova chance!
        </Typography>
      </Container>
      <ProcessSection />
      <PinkSection />
      <BrandsSection />
      <GalleryAndContact />
    </Box>
  )
}
