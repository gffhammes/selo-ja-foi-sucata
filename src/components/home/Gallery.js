import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material"
import Image from 'next/image'

const galleryImages = [
  '/images/gallery01.png',
  '/images/gallery02.png',
  '/images/gallery03.png',
  '/images/gallery04.png',
  '/images/gallery05.png',
  '/images/gallery06.png',
]

 const Gallery = () => {
  return (
    <Box
      bgcolor='green.main'
      sx={{ 
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 'min(calc(40vw + 10rem), 60rem)',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundImage: 'url("images/Asset 1@4x.png")',
          backgroundColor: '#fff',
          zIndex: 0,
        },
        height: 'fit-content',
        // backgroundImage: { xs: 'url("images/green-background-reverse-home-mobile.png")', md: 'url("images/green-background-reverse-home-desktop.png")' },
        position: 'relative',
        width: '100%',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
      }}
    >      
      <Container sx={{ pt: 20 }}>
        <div>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {galleryImages.map((image, index) => (
              <Grid item xs={6} sm={6} md={4} key={index}>
                <Box sx={{ height: { xs: '10rem', md: '20rem' }, width: '100%', position: 'relative' }}>
                  <Image src={image} alt={index} layout='fill' objectFit='cover' style={{ borderRadius: '1rem' }}/>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </Box>
  )
}

export default Gallery;