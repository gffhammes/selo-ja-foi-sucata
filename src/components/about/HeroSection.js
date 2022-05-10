import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'

const HeroText = () => {
  return (
    <Stack spacing={3} sx={{ flex: 1 }}>
      <Typography variant='h1' fontSize='2rem' fontWeight={500}>Como surgiu o selo?</Typography>
      <Typography sx={{width: 'min(52ch, 100%)' }}>
        O selo surgiu na Mag Embalagens como uma forma de reforçar o nosso compromisso com a sustentabilidade, e em paralelo, estimular ações e escolhas cada vez mais conscientes no universo dos e-commerces.
        <br/><br/>
        A Mag faz parte de um grupo com mais de 20 anos onde, entre as empresas parcerias, estão aquelas que coletam os materiais residuais e convertem em novas chapas de papelão para serem transformadas nas caixas de transportes de milhares de empreendedores de todo o país.
        <br/><br/>
        São nessas caixas, produzidas com matéria-prima reciclada e 100% reciclável, que o Selo Já Foi Sucata está presente. Ao impulsionar o uso de embalagens de papelão reciclado, estamos estimulando um olhar crítico para a geração de resíduos e a importância de aumentar as taxas de reciclagem no Brasil.
      </Typography>
    </Stack>
  )
}

const HeroVideo = () => {
  return (
    <div style={{ flex: 1 }}>
      <iframe
        width="100%"
        height="100%"
        style={{ borderRadius: '1rem' }}
        src="https://www.youtube.com/embed/48KNB0oh9UA?controls=0"
        title="Mag Embalagens"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export const HeroSection = () => {
  return (
    <Box
      sx={{        
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("images/green-background.png")',
        width:'100%',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <Container>        
        <Stack direction='row' spacing={2}>
          <HeroText />
          <HeroVideo />
        </Stack>
      </Container>
    </Box>
  )
}
