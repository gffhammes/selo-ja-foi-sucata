import { Box, Container, Stack } from '@mui/material';
import React from 'react'
import { useRouteData } from '../../hooks/useRouteData'
import Footer01 from '../../../public/vectors/footer-01.svg'
import Footer02 from '../../../public/vectors/footer-02.svg'

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

export const PreFooter = () => {
  const { preFooterColor } = useRouteData();
  return (
    <Box bgcolor={preFooterColor} sx={{ height: 'fit-content' }}>
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
