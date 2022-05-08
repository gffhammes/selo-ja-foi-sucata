import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { ProcessIconText } from './ProcessIconText'



export const ProcessSection = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={3}>          
          <ProcessIconText image='/images/icone-destinacao-correta.png' text='Destinação Correta' background='/images/bola-rosa.png' />
        </Grid>
        <Grid item xs={3}>          
          <ProcessIconText image='/images/icone-separacao-e-reciclagem.png' text='Separação & Reciclagem' background='/images/bola-azul.png' />
        </Grid>
        <Grid item xs={3}>          
          <ProcessIconText image='/images/icone-quando-a-sucata-se-transforma.png' text='Quando a sucata se transforma' background='/images/bola-amarela.png' />
        </Grid>
        <Grid item xs={3}>          
          <ProcessIconText image='/images/icone-nasce-uma-caixa-com-historia.png' text='Nasce uma caixa com história' background='/images/bola-verde.png' />
        </Grid>
      </Grid>
      <Button color='red' variant='contained'>Conheça mais o processo!</Button>
    </Container>
  )
}
