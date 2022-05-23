import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { defaultButtonStyle } from '../../constants/buttonStyle'
import Image from 'next/image'
import { useWindowSize } from '../../hooks/useWindowSize'
import { defaultPaddingTop } from '../../constants/pagesStyle'

const topText = 'Uma caixa feita de outras caixas:';
const h1 = 'Encontrou o selo\nda caixinha sorrindo?';

const DesktopHero = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs='auto' sx={{ pt: 8, width: 'fit-content',  zIndex: 500 }}>        
        <Typography variant='h1' fontSize={24}>{topText}</Typography>
        <Typography variant='h1' sx={{ mt: 2, whiteSpace: 'pre-wrap' }}>{h1}</Typography>
        <Link href='/sobre-nos' passHref>
          <a>
            <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, mt: 3 }}>Saiba o que significa!</Button>
          </a>
        </Link>
      </Grid>
      <Grid item xs>        
        <Box sx={{ position: 'relative', width: '100%', height: '40vw', minHeight: '10rem', maxHeight: '30rem', zIndex: 500 }}>
          <Image
            src='/images/selo-ja-foi-sucata-caixas-home.webp'
            alt='Caixas Selo Já Foi Sucata'
            layout='fill'
            objectFit='contain'
            objectPosition='right'
          />
        </Box>
      </Grid>
    </Grid>
  )
}


const MobileHero = () => {
  return (
    <Stack direction='column' alignItems='flex-start' spacing={1} justifyContent='space-between'>
      <Typography variant='h1' fontSize={16}>{topText}</Typography>
      <Typography variant='h1' fontSize={32} sx={{ mt: 2 }}>{h1}</Typography>
      <Box sx={{ position: 'relative', width: '100%', height: '18rem', zIndex: 500, mt: '1.5rem!important' }}>
        <Image
          src='/images/selo-ja-foi-sucata-caixas-home.png'
          alt='Caixas Selo Já Foi Sucata'
          layout='fill'
          objectFit='contain'
          objectPosition='right'
        />
      </Box>
      <Link href='/sobre-nos' passHref>
        <a style={{ width: '100%' }}>
          <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, mt: 3, width: '100%', zIndex: 500 }}>Saiba o que significa!</Button>
        </a>
      </Link>
    </Stack>
  )
}

export const HeroSection = () => {
  const { width } = useWindowSize();

  return (
    <Box sx={{
      minHeight: { xs: '80vh', md: '90vh' },
      width: '100%',
      backgroundColor: '#22EFE7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      pt: defaultPaddingTop,
    }}>
      <Container>
        {width > 675 ? <DesktopHero /> : <MobileHero />} 
      </Container>
      <Box sx={{ position: 'absolute', borderRight: '100vw solid #22EFE7', borderBottom: '15vw solid white', bottom: 0 }}></Box>
    </Box>
  )
}
