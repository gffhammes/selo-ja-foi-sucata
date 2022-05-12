import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const cases = [
  {
    backgroundImage: '',
    title: 'A caixa de envios certa para quem vende roupas online!',
  },
  {
    backgroundImage: '',
    title: 'Cases para se inspirar: Cacto Azul',
  },
]

export const CasesSection = () => {
  return (
    <Container>
      <Grid container spacing={10}>
        {cases.map((item, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Box sx={{ height: '15rem', width: '100%', backgroundColor: '#c4c4c4', borderRadius: '.5rem' }}/>
            <Typography fontSize={20} textAlign='center' sx={{ maxWidth: '22ch', mx: 'auto' }}>{item.title}</Typography>
            <Typography textAlign='center' sx={{ width: 'fit-content', mx: 'auto' }}>Ler mais</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
