import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { defaultButtonStyle } from '../../constants/buttonStyle'
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <Box sx={{
      minHeight: '80vh',
      width: '100%',
      backgroundColor: '#22EFE7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      pt: 20,
    }}>
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems='flex-start' spacing={1} justifyContent='space-between'>
          <Box sx={{ pt: { xs: 0, md: 8 }, width: '100%' }}>        
            <Typography variant='h1' fontSize={24}>Um selo sobre transformação:</Typography>
            <Typography variant='h1' sx={{ mt: 2 }}>Encontrou a<br/>caixinha sorrindo?</Typography>
            <Link href='/sobre-nos' passHref>
              <a>
                <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, mt: 3, width: { xs: '100%', md: 'fit-content' } }}>Saiba o que significa!</Button>
              </a>
            </Link>
          </Box>
          <Box sx={{ position: 'relative', width: { xs: '100%', md: '43rem' }, height: { xs: '20rem', md: '38rem' }, zIndex: 500 }}>
            <Image
              src='/images/selo-ja-foi-sucata-caixas-home.png'
              alt='Caixas Selo Já Foi Sucata'
              layout='fill'
              objectFit='contain'
              objectPosition='right'
            />
          </Box>
        </Stack>
      </Container>
      <Box sx={{ position: 'absolute', borderRight: '100vw solid #22EFE7', borderBottom: '20vh solid white', bottom: 0 }}></Box>
    </Box>
  )
}
