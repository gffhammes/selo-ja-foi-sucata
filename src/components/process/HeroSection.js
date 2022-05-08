import { Box, Container } from '@mui/material'
import React from 'react'

export const HeroSection = () => {
  return (
    <Box
      sx={{        
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("images/yellow-background.png")',
        width:'100%',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        position: 'absolute',
      }}
    >
    </Box>
  )
}
