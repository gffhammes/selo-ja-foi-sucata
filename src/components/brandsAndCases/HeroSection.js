import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const brands = [
  {
    image: 'elo7-logo.png',
    name: 'Elo7',
    category: 'Marketplace',
  },
  {
    image: 'elo7-logo.png',
    name: 'Elo7',
    category: 'Marketplace',
  },
  {
    image: 'elo7-logo.png',
    name: 'Elo7',
    category: 'Marketplace',
  },
  {
    image: 'elo7-logo.png',
    name: 'Elo7',
    category: 'Marketplace',
  },
  {
    image: 'elo7-logo.png',
    name: 'Elo7',
    category: 'Marketplace',
  },
  {
    image: 'elo7-logo.png',
    name: 'Elo7',
    category: 'Marketplace',
  },
]

const HeroText = () => {
  return (
    <Stack spacing={3}>
      <Typography variant='h1' fontSize='2rem' fontWeight={500} textAlign='center'>Marcas que colaboram<br/>com um mundo melhor!</Typography>
    </Stack>
  )
}

const HeroBrands = () => {
  return (
    <Box>
      <Grid container spacing={7}>
        {brands.map((brand, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={0} sx={{ p: 6 }}>
              <Box sx={{ position: 'relative', height: '6rem', width: '100%'}}>
                <Image
                  src={`/images/${brand.image}`}
                  alt={brand.name}
                  layout='fill'
                  objectFit='contain'
                />
              </Box>
            </Paper>
            <Typography textAlign='center' sx={{ mt: 1 }}>{brand.name}</Typography>
            <Typography textAlign='center' fontSize={12}>{brand.category}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export const HeroSection = () => {
  return (
    <Box
      sx={{        
        height: '110vh',
        backgroundImage: 'url("images/blue-background.png")',
        width:'100%',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        pt: 20
      }}
    >
      <Container>        
        <Stack direction='column' spacing={2}>
          <HeroText />
          <HeroBrands />
        </Stack>
      </Container>
    </Box>
  )
}
