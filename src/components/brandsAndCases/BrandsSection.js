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

const HeroBrands = () => {
  return (
    <Box>
      <Grid container spacing={{ xs: 5, md: 7 }}>
        {brands.map((brand, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={1} sx={{ p: 6 }}>
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

export const BrandsSection = () => {
  return (
    <Container>        
      <Stack direction='column' spacing={10}>
        <Typography variant='h1' fontSize='2rem' fontWeight={500} textAlign='center' sx={{ maxWidth: '21ch', mx: 'auto' }}>Marcas que colaboram com um mundo melhor!</Typography>
        <HeroBrands />
      </Stack>
    </Container> 
  )
}
