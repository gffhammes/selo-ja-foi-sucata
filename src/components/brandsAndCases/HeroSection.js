import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { defaultPaddingTop } from '../../constants/pagesStyle'
import { BrandsSection } from './BrandsSection'

export const HeroSection = () => {
  return (
    <Box
      bgcolor='blue.main'
      sx={{        
        height: 'fit-content',
        minHeight: '80vh',
        width:'100%',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        py: defaultPaddingTop, 
        position: 'relative',
        zIndex: 0,
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%', 
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundImage: 'url("/vectors/blue-wave.svg")',
          zIndex: 0,          
        },
      }}
    >
      <BrandsSection />
    </Box>
  )
}
