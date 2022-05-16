import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { defaultPaddingTop } from '../../constants/pagesStyle'

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

const Brands = () => {
  return (
    <Stack spacing={4} sx={{ width: { xs: '100%', md: 'unset' } }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ width: '100%', transform: { xs: 'translateX(0)', md: 'translateX(7%)', lg: 'translateX(0)' } }}>
        {brands.slice(0, 2).map((brand, index) => (
          <Box key={index} sx={{ flex: 1 }}>
            <Paper elevation={0} sx={{ p: 2, width: { xs: '100%', md: '18rem' }, maxWidth: { xs: 'unset', md: '18rem' }, borderRadius: '.75rem' }}>
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
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ transform: { xs: 'translateX(0)', md: 'translateX(-7%)', lg: 'translateX(-15%)' } }}>
        {brands.slice(2, 4).map((brand, index) => (
          <Box key={index} sx={{ flex: 1 }}>
            <Paper elevation={0} sx={{ p: 2, width: { xs: '100%', md: '18rem' }, maxWidth: { xs: 'unset', md: '18rem' }, borderRadius: '.75rem' }}>
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
      bgcolor='green.main'
      sx={{        
        height: 'fit-content',
        width:'100%',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        pt: defaultPaddingTop, 
        pb: 20, 
        position: 'relative',
        zIndex: 0,
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%', 
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundImage: 'url("images/green-wave-reverse.png")',
          zIndex: 0,          
        },
      }}
    >
      <Container>        
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 10, lg: 2}} justifyContent='space-between' alignItems='center'>          
          <Stack direction={{ xs: 'column', sm: 'row', lg: 'column' }} spacing={{ xs: 5, lg: 3 }} alignItems={{ xs: 'flex-start', sm: 'center', lg: 'flex-start' }}>
            <Typography variant='h2' fontSize='2rem' fontWeight={500}>Empresas com<br/>a mesma missão!</Typography>
            <Typography sx={{ maxWidth: '30ch' }}>Algumas entre as muitas empresas locais que dão aos seus resíduos a oportunidade de se transformar em embalagens que Já Foi Sucata</Typography>
          </Stack>
          <Brands />
        </Stack>
      </Container>
    </Box>
  )
}
