import { Box, Button, Container } from '@mui/material'
import React from 'react'
import { HomeH1 } from './HomeH1'
import Link from 'next/link'


export const HeroSection = () => {
  return (
    <Box sx={{
      height: '80vh',
      width: '100%',
      backgroundColor: '#22EFE7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Container>
        <HomeH1/>
        <Link href='sobre-nos' passHref>
          <a>
            <Button color='red' variant='contained'>Saiba o que significa!</Button>
          </a>
        </Link>
      </Container>
      <Box sx={{ position: 'absolute', borderRight: '100vw solid #22EFE7', borderBottom: '20vh solid white', bottom: 0 }}></Box>
    </Box>
  )
}
