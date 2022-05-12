import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { defaultButtonStyle } from '../../constants/buttonStyle'
import Link from 'next/link'

const LeftText = () => {
  return (
    <Box sx={{ flex: '60%' }}>
      <Typography variant='h2' fontSize={40}   gutterBottom>Conheça algumas marcas conscientes</Typography>
      <Typography fontSize={24}>que estão com a gente nessa e que se preocupam em contribuir com um futuro melhor dentro dos seus negócios.</Typography>
      <Link href='/marcas-e-cases' passHref >
        <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, width: { xs: '100%', md: 'fit-content' }, mt: 4 }}>Ver todos os cases</Button>
      </Link>
    </Box>
  )
}

const BrandsImage = () => {
  return (
    <Box sx={{ position: 'relative', height: { xs: '20rem', md: '37rem' }, width: '100%' }}>
      <Image src='/images/brands-image.png' layout='fill' objectFit='contain' alt='Marcas'/>
    </Box>
  )
}


export const BrandsSection = () => {
  return (
    <Container sx={{ pt: { xs: 20, md: 10 } }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent='space-between' alignItems='center' >
        <LeftText />
        <BrandsImage />
      </Stack>
    </Container>
  )
}
