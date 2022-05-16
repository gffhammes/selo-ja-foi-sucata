import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { defaultPaddingTop } from '../../constants/pagesStyle'

const steps = [
  {
    icon: 'icone-destinacao-correta.png',
    iconBackground: 'bola-rosa.png',
    title: 'Destinação Correta',
    description: 'O ciclo começa com o apoio de empresas locais parceiras que encaminham seus resíduos de papéis e papelões à unidade de gestão de resíduos.',
    images: [
      'processo1.png',
      'processo1.png',
      'processo1.png',
    ],
  },
  {
    icon: 'icone-separacao-e-reciclagem.png',
    iconBackground: 'bola-azul.png',
    title: 'Separação & Reciclagem',
    description: 'Com ajuda de muitas mãos, eles são separados, categorizados e agrupados em grandes fardos de aparas. (sucatas).',
    images: [
      'processo2.png',
      'processo2.png',
      'processo2.png',
    ],
  },
  {
    icon: 'icone-quando-a-sucata-se-transforma.png',
    iconBackground: 'bola-amarela.png',
    title: 'Transformação da Sucata',
    description: 'Esses fardos vão para uma indústria que, em um processo responsável e certificado, transforma os resíduos em novas chapas de papelão reciclado.',
    images: [
      'processo3.png',
      'processo3.png',
      'processo3.png',
    ],
  },
  {
    icon: 'icone-nasce-uma-caixa-com-historia.png',
    iconBackground: 'bola-verde.png',
    title: 'Nasce uma caixa com história',
    description: 'Por fim, as chapas voltam para a fábrica da Mag e dão vida ao sonho de milhares de marcas conscientes de todo o Brasil.',
    images: [
      'processo4.png',
      'processo4.png',
      'processo4.png',
    ],
  },
]

const iconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10rem',
  position: 'relative',
}

const ProcessStep = ({ step, index }) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} alignItems='center' spacing={4}>
      <Box sx={iconStyle}>
        <Box sx={{ height: '4rem', width: '4rem', position: 'absolute', zIndex: 10 }}>
          <Image src={`/images/${step.icon}`} alt={step.title} layout='fill' objectFit='contain' />
        </Box>
        <Box sx={{ height: '10rem', width: '10rem', position: 'relative', zIndex: 9 }}>
          <Image src={`/images/${step.iconBackground}`} alt='background' layout='fill' objectFit='contain' />
        </Box>
      </Box> 
      <Box>
        <Typography fontSize={24}>{`${index + 1}. ${step.title}`}</Typography>
        <Typography>{step.description}</Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Stack direction='row' spacing={2} sx={{ width: '100%' }}>
          {step.images.map((image, index) => (
            <Box key={index} sx={{ position: 'relative', height: '10rem', width: { xs: '100%', md: '10rem' } }}>
              <Image
                src={`/images/${image}`}
                layout='fill'
                alt=''
                objectFit='cover'
                style={{ borderRadius: '1rem' }}
              />
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}

export const ProcessSteps = () => {
  return (
    <Container sx={{ position: 'relative', pt: defaultPaddingTop }}>
      <Typography variant='h1' textAlign='center' sx={{ textDecoration: 'underline' }}>Processo</Typography>
      <Typography fontSize={24} textAlign='center' sx={{ maxWidth: '55ch', m: 'auto', mt: 3 }}>
        Bora conhecer mais do processo que, através de uma economia circular, dá uma nova chance ao que seria considerado “lixo”?
      </Typography>
      <Stack spacing={8} sx={{ mt: 8 }}>
        {steps.map((step, index) => (
          <ProcessStep step={step} key={index} index={index} />
        ))}
      </Stack>
      <Typography fontSize={24} textAlign='center' sx={{ m: 'auto', mt: 12 }}>
        E é dessa forma que, o que teria ali o seu ciclo encerrado, ganha uma nova chance e se transforma em uma caixa linda e resistente.
      </Typography>
    </Container>
  )
}
