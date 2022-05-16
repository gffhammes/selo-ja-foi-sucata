import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const cases = [
  {
    backgroundImage: 'caixas-p-roupas-blog.png',
    title: 'A caixa de envios certa para quem vende roupas online!',
  },
  {
    backgroundImage: 'banner_blog_mag_cacto.png',
    title: 'Cases para se inspirar: Cacto Azul',
  },
]

export const CasesSection = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={10}>
        {cases.map((item, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Box
              sx={{
                height: { xs: '100vw', md: '25vw' },
                maxHeight: { xs: '12rem', md: '19rem' },
                width: '100%',
                backgroundImage: `url("/images/${item.backgroundImage}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                borderRadius: '.5rem'
              }}
            />
            <Typography fontSize={20} textAlign='center' sx={{ maxWidth: '23ch', mx: 'auto', my: 2 }}>{item.title}</Typography>
            <Typography textAlign='center' color='red.main' sx={{ width: 'fit-content', mx: 'auto', textDecoration: 'underline' }}>Ler mais</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
