import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { defaultButtonStyle } from '../../constants/buttonStyle'

export const HeroSection = () => {
  return (
    <Box sx={{
      height: '90vh',
      width: '100%',
      backgroundColor: '#22EFE7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Container>
        <Typography variant='h1' fontSize={24}>Um selo sobre transformação:</Typography>
        <Typography variant='h1' sx={{ mt: 2 }}>Encontrou a<br/>caixinha sorrindo?</Typography>
        <Link href='/sobre-nos' passHref>
          <a>
            <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, mt: 3 }}>Saiba o que significa!</Button>
          </a>
        </Link>
      </Container>
      <Box sx={{ position: 'absolute', borderRight: '100vw solid #22EFE7', borderBottom: '20vh solid white', bottom: 0 }}></Box>
    </Box>
  )
}
