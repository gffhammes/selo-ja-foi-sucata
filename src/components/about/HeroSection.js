import { Box, Container, Skeleton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { defaultPaddingTop } from '../../constants/pagesStyle'
import { useWindowSize } from '../../hooks/useWindowSize'

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
  const [loading, setLoading] = useState(true);
  const { width } = useWindowSize();

  return (
    <Box sx={{ flex: 1, height: { xs: '10rem', md: 'unset' }, borderRadius: '1rem', position: 'relative' }}>      
        {loading && <Skeleton variant="rectangular" width='100%' height='100%' sx={{ position: 'absolute', borderRadius: '1rem' }} />}
        <iframe
          loading="lazy"
          width="100%"
          height={width > 960 ? "100%" : "250"}
          style={{ borderRadius: '1rem', border: '1px solid rgba(0, 0, 0, 0.185)', visibility: loading ? 'hidden' : 'visible' }}
          src="https://www.youtube.com/embed/48KNB0oh9UA?controls=0"
          title="Mag Embalagens"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoading(false)}
        />
    </Box>
  )
}

const HeroMobile = () => {
  return (
    <Stack spacing={3} sx={{ flex: 1 }}>
      <Typography variant='h1' fontSize='2rem' fontWeight={500}>Como surgiu o selo?</Typography>
      <HeroVideo />
      <Typography sx={{width: '100%' }}>
        O selo surgiu na Mag Embalagens como uma forma de reforçar o nosso compromisso com a sustentabilidade, e em paralelo, estimular ações e escolhas cada vez mais conscientes no universo dos e-commerces.
        <br/><br/>
        A Mag faz parte de um grupo com mais de 20 anos onde, entre as empresas parcerias, estão aquelas que coletam os materiais residuais e convertem em novas chapas de papelão para serem transformadas nas caixas de transportes de milhares de empreendedores de todo o país.
        <br/><br/>
        São nessas caixas, produzidas com matéria-prima reciclada e 100% reciclável, que o Selo Já Foi Sucata está presente. Ao impulsionar o uso de embalagens de papelão reciclado, estamos estimulando um olhar crítico para a geração de resíduos e a importância de aumentar as taxas de reciclagem no Brasil.
      </Typography>
    </Stack>
  )  
}

const HeroDesktop = () => {
  return (
    <>
      <HeroText />
      <HeroVideo />
    </>
  )
}

export const HeroSection = () => {  
  const { width } = useWindowSize();

  return (
    <Box
      bgcolor='green.main'
      sx={{
        minHeight: { xs: 'fit-content', md: '80vh' },
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  
        position: 'relative',
        pt: defaultPaddingTop,
        pb: 10,
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%', 
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundImage: 'url("images/green-wave.png")',
          zIndex: 0,          
        },
      }}
    >
      <Container>        
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ position: 'relative', zIndex: '10' }}>
          {width > 960 ? <HeroDesktop /> : <HeroMobile />}
        </Stack>
      </Container>
    </Box>
  )
}
