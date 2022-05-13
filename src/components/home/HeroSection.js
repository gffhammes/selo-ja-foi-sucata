import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { defaultButtonStyle } from '../../constants/buttonStyle'
import Image from 'next/image'
import { useWindowSize } from '../../hooks/useWindowSize'

const DesktopHero = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs='auto' sx={{ pt: 8, width: 'fit-content' }}>        
        <Typography variant='h1' fontSize={24}>Um selo sobre transformação:</Typography>
        <Typography variant='h1' sx={{ mt: 2 }}>Encontrou a<br/>caixinha sorrindo?</Typography>
        <Link href='/sobre-nos' passHref>
          <a>
            <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, mt: 3 }}>Saiba o que significa!</Button>
          </a>
        </Link>
      </Grid>
      <Grid item xs>        
        <Box sx={{ position: 'relative', width: '100%', height: '30rem', zIndex: 500 }}>
          <Image
            src='/images/selo-ja-foi-sucata-caixas-home.png'
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
    <Stack direction={{ xs: 'column', md: 'row' }} alignItems='flex-start' spacing={1} justifyContent='space-between'>
        <Typography variant='h1' fontSize={16}>Um selo sobre transformação:</Typography>
        <Typography variant='h1' fontSize={32} sx={{ mt: 2 }}>Encontrou a<br/>caixinha sorrindo?</Typography>
      <Box sx={{ position: 'relative', width: '100%', height: { xs: '20rem', md: '38rem' }, zIndex: 500 }}>
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
      minHeight: '80vh',
      width: '100%',
      backgroundColor: '#22EFE7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      pt: { xs: 12, md: 20},
    }}>
      <Container>
        {width > 675 ? <DesktopHero /> : <MobileHero />} 
      </Container>
      <Box sx={{ position: 'absolute', borderRight: '100vw solid #22EFE7', borderBottom: '20vh solid white', bottom: 0 }}></Box>
    </Box>
  )
}
