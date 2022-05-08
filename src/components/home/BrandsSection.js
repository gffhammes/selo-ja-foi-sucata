import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const LeftText = () => {
  return (
    <Box sx={{ flex: '60%' }}>
      <Typography variant='h2' fontSize={40} fontWeight={500} gutterBottom>Conheça algumas marcas conscientes</Typography>
      <Typography>que estão com a gente nessa e que se preocupam em contribuir com um futuro melhor dentro dos seus negócios.</Typography>
      <Button color='red' variant='contained'>Ver todos os cases</Button>
    </Box>
  )
}

const BrandsImage = () => {
  return (
    <Box sx={{ position: 'relative', height: '30rem', width: '100%' }}>
      <Image src='/images/brands-image.png' layout='fill' objectFit='contain' alt='Marcas'/>
    </Box>
  )
}


export const BrandsSection = () => {
  return (
    <Container>
      <Stack direction='row' spacing={4} justifyContent='space-between' alignItems='center' >
        <LeftText />
        <BrandsImage />
      </Stack>
    </Container>
  )
}
