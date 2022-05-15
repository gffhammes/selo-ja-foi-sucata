import { Box, Container } from '@mui/material'
import React from 'react'
import { defaultPaddingTop } from '../../constants/pagesStyle'

export const HeroSection = () => {
  return (
    <Box
      bgcolor='yellow.main'
      sx={{
        minHeight: { xs: 'fit-content', md: '70vh' },
        height: '70vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        pt: defaultPaddingTop,
        pb: 10,
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
          backgroundImage: 'url("images/yellow-wave.png")',
          zIndex: 0,          
        },
      }}
    />
  )
}
