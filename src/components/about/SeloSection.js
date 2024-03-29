import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Package from '../../../public/vectors/package.svg'
import GreenCircle from '../../../public/vectors/green-circle.svg'
import BlueSpike from '../../../public/vectors/blue-spike.svg'
import Link from 'next/link'

const Text = () => {
  return (
    <Box sx={{ flexBasis: { xs: 'unset', md: '45ch' }, flexGrow: { xs: 1, md: 0 } }}>
      <Stack spacing={4} sx={{ /*maxWidth: '45ch' */ }}>
        <Box sx={{ position: 'relative', height: '5rem', width: '15rem' }} >
          <Image
            src='/images/selo-ja-foi-sucata-rosa.png'
            alt='Selo Já Foi Sucata'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </Box>
        <Typography variant='h2'>O Selo Já Foi Sucata</Typography>
        <Typography>
          A partir de uma economia circular, você recebe uma caixa que poderá virar outra caixa, Ou seja, se fizermos a nossa parte e descartarmos ela corretamente, nunca faltarão recursos e não precisaremos retirar todo esse material novamente da natureza!
          <br/><br/>
          Por isso, se você encontrou a caixinha sorrindo, saiba que você está comprando ou recebendo uma embalagem de papelão reciclado e 100% reciclável, que #JáFoiSucata!
        </Typography>
        <Link href='/processo' passHref>
          <a>  
            <Stack direction='row' alignItems='center' spacing={1} sx={{ pt: 2 }}>                      
              <Package />
              <Typography
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  color: 'rgb(236, 25, 6)',
                  '&::before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    borderBottom: '1px solid red',
                    width: '100%',
                    height: 'calc(100% - 1px)',
                    transform: 'translate(-100%)',
                    transition: '500ms ease',
                  },
                  '&:hover': {
                    '&::before': {
                      transform: 'translate(0)'
                    }
                  },
                }}
              >
                Conheça nosso processo
              </Typography>
            </Stack>
          </a>
          </Link>
      </Stack>
    </Box>
  )
}

const ImageAndElements = () => {
  return (
    <Box sx={{ flex: 'max-content' }}>
      <Box sx={{ position: 'relative', height: { xs: '26rem', md: '40rem'}, width: '100%', borderRadius: '1rem' }} >
        <Box sx={{ zIndex: 10, position: 'absolute', transform: { xs: 'translate(-20%, -20%)', md: 'translate(-50%, 10%)' }, height: '10rem' }} >
          <BlueSpike height='100%' width='100%' />
        </Box>
        <Image
          src='/images/IMG_1112.png'
          alt='Selo Já Foi Sucata'
          layout='fill'
          objectFit='cover'
          objectPosition='right'
          style={{ zIndex: 5, borderRadius: '1rem' }}
        />
        <Box sx={{ zIndex: 1, position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, 20%)', height: '7rem' }} >
          <GreenCircle height='100%' width='100%' />
        </Box>
      </Box>
    </Box>
  )
}

export const SeloSection = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems={{  md: 'center' }} spacing={5}>
        <Text />
        <ImageAndElements />
      </Stack>
    </Container>
  )
}
