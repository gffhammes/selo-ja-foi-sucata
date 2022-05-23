import { Box, Container, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { HomePreFooter } from '../commons/PreFooter'
import { BrandsSection } from './BrandsSection'
import { ContactForm } from './ContactForm'
import { Gallery } from './Gallery'
import { HeroSection } from './HeroSection'
import { PinkSection } from './PinkSection'
import { ProcessSection } from './ProcessSection'
import { TransformationCard } from './TransformationCard'

export const HomePage = () => {

  return (
    <Box sx={{ height: '100%' }}>  
      <HeroSection />
      <Container maxWidth='sm' sx={{ py: 8 }} >
        <Typography fontSize={'1.5rem'} textAlign='center' >
          Uma iniciativa da <strong>Mag Embalagens</strong> que junto da empresa recicladora do seu grupo, coleta e seleciona resíduos de papéis e papelões da economia local que são convertidos para matéria-prima de novas caixas para e-commerce.
        </Typography>
      </Container>
      <TransformationCard />
      <Container maxWidth='sm' sx={{ py: 8 }} >
        <Typography fontSize={'1.5rem'} textAlign='center' >
        Para cada tonelada de papelão reciclado <strong>a derrubada de 20 a 30 árvores &#127795; adultas é evitada.</strong>
        </Typography>
      </Container>
      <ProcessSection />
      <PinkSection />
      <BrandsSection />
      <Gallery />
      <ContactForm />
      <HomePreFooter />
    </Box>
  )
}
