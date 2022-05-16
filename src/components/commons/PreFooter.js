import { Box, Container, Stack } from '@mui/material';
import React, { useMemo } from 'react'
import { useRouteData } from '../../hooks/useRouteData'
import Footer01 from '../../../public/vectors/footer-01.svg'
import Footer02 from '../../../public/vectors/footer-02.svg'
import Footer03 from '../../../public/vectors/footer-03.svg'
import Footer04 from '../../../public/vectors/footer-04.svg'
import Footer05 from '../../../public/vectors/footer-05.svg'
import Footer06 from '../../../public/vectors/footer-06.svg'
import Footer07 from '../../../public/vectors/footer-07.svg'
import Footer08 from '../../../public/vectors/footer-08.svg'

const footer01Style = {
  height: '8vw',
  minHeight: '3rem',
  maxHeight: '5rem',
  width: '100%'
}

const footer02Style = {
  height: '10vw',
  minHeight: '5rem',
  maxHeight: '7rem',
  width: '100%'
}

const footer03Style = {
  height: '12vw',
  minHeight: '5rem',
  maxHeight: '6rem',
  width: '100%'
}

const footer04Style = {
  height: '7vw',
  minHeight: '1rem',
  maxHeight: '2.5rem',
  width: '100%'
}

const footer05Style = {
  height: '9vw',
  minHeight: '5rem',
  maxHeight: '10rem',
  width: '100%'
}

const footer06Style = {
  height: '15vw',
  minHeight: '7rem',
  maxHeight: '15rem',
  width: '100%'
}

const footer07Style = {
  height: '5vw',
  minHeight: '1rem',
  maxHeight: '3rem',
  width: '100%'
}

const footer08Style = {
  height: '10vw',
  minHeight: '2rem',
  maxHeight: '5rem',
  width: '100%'
}

export const HomePreFooter = () => {
  return (
    <Box bgcolor='green.main' sx={{ height: 'fit-content' }}>
      <Container>
        <Stack direction='row' alignItems='flex-end' justifyContent='space-between' sx={{ width: '100%' }}>
          <Box sx={footer01Style}>
            <Footer01 width='100%' height='100%' preserveAspectRatio="xMinYMax"/>
          </Box>
          <Box sx={footer02Style}>
            <Footer02 width='100%' height='100%' preserveAspectRatio="xMaxYMax"/>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export const AboutPreFooter = () => {
  return (
    <Box sx={{ height: 'fit-content' }}>
      <Container>
        <Stack direction='row' alignItems='flex-end' justifyContent='space-between' sx={{ width: '100%' }}>
          <Box sx={footer03Style}>
            <Footer03 width='100%' height='100%' preserveAspectRatio="xMinYMax"/>
          </Box>
          <Box sx={footer04Style}>
            <Footer04 width='100%' height='100%' preserveAspectRatio="xMaxYMax"/>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export const ProcessPreFooter = () => {
  return (
    <Box sx={{ height: 'fit-content' }}>
      <Container>
        <Stack direction='row' alignItems='flex-end' justifyContent='space-between' sx={{ width: '100%' }} spacing={4}>
          <Box sx={footer05Style}>
            <Footer05 width='100%' height='100%' preserveAspectRatio="xMinYMax"/>
          </Box>
          <Box sx={footer06Style}>
            <Footer06 width='100%' height='100%' preserveAspectRatio="xMaxYMax"/>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export const BrandsAndCasesPreFooter = () => {
  return (
    <Box bgcolor='green.main' sx={{ height: 'fit-content' }}>
      <Container>
        <Stack direction='row' alignItems='flex-end' justifyContent='space-between' sx={{ width: '100%' }}>
          <Box sx={footer07Style}>
            <Footer07 width='100%' height='100%' preserveAspectRatio="xMinYMax"/>
          </Box>
          <Box sx={footer08Style}>
            <Footer08 width='100%' height='100%' preserveAspectRatio="xMaxYMax"/>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}