import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { defaultButtonStyle } from '../../constants/buttonStyle'
import { ProcessIconText } from './ProcessIconText'
import Link from 'next/link'

const processes = [
  {
    image: '/images/icone-destinacao-correta.png',
    text: 'Destinação Correta',
    background: '/images/bola-rosa.png',
  },
  {
    image: '/images/icone-separacao-e-reciclagem.png',
    text: 'Separação & Reciclagem',
    background: '/images/bola-azul.png',
  },
  {
    image: '/images/icone-quando-a-sucata-se-transforma.png',
    text: 'Quando a sucata se transforma',
    background: '/images/bola-amarela.png',
  },
  {
    image: '/images/icone-nasce-uma-caixa-com-historia.png',
    text: 'Nasce uma caixa com história',
    background: '/images/bola-verde.png',
  },
]

export const ProcessSection = () => {
  return (
    <Container sx={{ mb: 10 }}>
      <Grid container spacing={4}>
        {processes.map((process, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>          
            <ProcessIconText image={process.image} text={process.text} background={process.background} />
          </Grid>
        ))}
        <Grid item xs={12} sx={{ display: 'flex' }}>     
          <Link href='/processo' passHref >
            <Button color='red' variant='contained' sx={{ ...defaultButtonStyle, width: { xs: '100%', md: 'fit-content' }, mx: 'auto', mt: 6 }}>Conheça mais o processo!</Button>
          </Link>     
        </Grid>
      </Grid>
    </Container>
  )
}
