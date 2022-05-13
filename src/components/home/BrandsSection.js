import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { defaultButtonStyle } from '../../constants/buttonStyle'
import Link from 'next/link'
import { useWindowSize } from '../../hooks/useWindowSize'

const MobileBrands = () => {
  return (
    <Stack direction='column' spacing={4} justifyContent='space-between' alignItems='center' >
      <Typography variant='h2' fontSize={40}>Conheça algumas marcas conscientes</Typography>
      <Typography fontSize={24}>que estão com a gente nessa e que se preocupam em contribuir com um futuro melhor dentro dos seus negócios.</Typography>
      <Box sx={{ position: 'relative', height: '20rem', width: '100%' }}>
        <Image src='/images/brands-image.png' layout='fill' objectFit='contain' alt='Marcas'/>
      </Box>
      <Link href='/marcas-e-cases' passHref >
        <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, width: '100%', mt: 4 }}>Ver todos os cases</Button>
      </Link>
    </Stack>
  )  
}

const DesktopBrands = () => {
  return (
    <Stack direction='row' spacing={4} justifyContent='space-between' alignItems='center' >
      <Box sx={{ flex: '60%' }}>
        <Typography variant='h2' fontSize={40} gutterBottom>Conheça algumas marcas conscientes</Typography>
        <Typography fontSize={24}>que estão com a gente nessa e que se preocupam em contribuir com um futuro melhor dentro dos seus negócios.</Typography>
        <Link href='/marcas-e-cases' passHref >
          <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, width: 'fit-content', mt: 4 }}>Ver todos os cases</Button>
        </Link>
      </Box>
      <Box sx={{ position: 'relative', height: '37rem', width: '100%' }}>
        <Image src='/images/brands-image.png' layout='fill' objectFit='contain' alt='Marcas'/>
      </Box>
    </Stack>
  )
}

export const BrandsSection = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 960;

  return (
    <Container sx={{ pt: { xs: 20, md: 10 } }}>
      {isMobile ? <MobileBrands /> : <DesktopBrands />}
    </Container>
  )
}
