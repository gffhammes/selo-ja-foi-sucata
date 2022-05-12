import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const brands = [
  {
    name: 'Neilar',
    logo: 'logo-neilar.png',
  },
  {
    name: 'Frigorífico Verdi',
    logo: 'logo-frigorifico-verdi.png',
  },
  {
    name: 'Neilar',
    logo: 'logo-neilar.png',
  },
  {
    name: 'Frigorífico Verdi',
    logo: 'logo-frigorifico-verdi.png',
  },
]

const Text = () => {
  return (
    <Stack spacing={3}>
      <Typography variant='h2' fontSize='2rem' fontWeight={500}>Empresas com<br/>a mesma missão!</Typography>
      <Typography sx={{ maxWidth: '30ch' }}>Algumas entre as muitas empresas locais que dão aos seus resíduos a oportunidade de se transformar em embalagens que Já Foi Sucata</Typography>
    </Stack>
  )
}

const Brands = () => {
  return (
    <Stack spacing={4}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        {brands.slice(0, 2).map((brand, index) => (
          <Box key={index} sx={{ flex: 1 }}>
            <Paper elevation={0} sx={{ p: 2, width: '18rem', borderRadius: '.75rem' }}>
              <Box sx={{ position: 'relative', height: '7rem', width: '100%'}}>
                <Image
                  src={`/images/${brand.logo}`}
                  alt={brand.name}
                  layout='fill'
                  objectFit='contain'
                />
              </Box>
            </Paper>
          </Box>
        ))}
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ transform: { xs: '', md: 'translateX(-20%)' } }}>
        {brands.slice(2, 4).map((brand, index) => (
          <Box key={index} sx={{ flex: 1 }}>
            <Paper elevation={0} sx={{ p: 2, width: '18rem', borderRadius: '.75rem' }}>
              <Box sx={{ position: 'relative', height: '7rem', width: '100%'}}>
                <Image
                  src={`/images/${brand.logo}`}
                  alt={brand.name}
                  layout='fill'
                  objectFit='contain'
                />
              </Box>
            </Paper>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}

export const BottomSection = () => {
  return (
    <Box
      sx={{        
        backgroundImage: 'url("images/green-background-reverse.png")',
        width:'100%',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        paddingTop: 30,
      }}
    >
      <Container>        
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent='space-between' alignItems='center'>
          <Text />
          <Brands />
        </Stack>
      </Container>
    </Box>
  )
}
