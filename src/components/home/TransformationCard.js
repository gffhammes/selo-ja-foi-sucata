import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Arrow from '../../../public/vectors/arrow.svg'
import { useWindowSize } from '../../hooks/useWindowSize'

const MobileCard = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: '#22EFE7',
          width: 'fit-content',
          mx: 'auto',
          px: 4,
          py: 10,
          borderRadius: '20rem',
          boxShadow: '0 0 40px #22EFE7'
        }}
      >
        <Stack direction='column' spacing={4} alignItems='center'>
          <Typography sx={{ textDecoration: 'underline', mt: '-2rem!important' }}>Em 2021</Typography>
          <Stack alignItems='center'>
            <Typography variant='h3' fontSize={48} fontWeight={500}>+145.000</Typography>
            <Typography><strong>Quilos</strong> de sucata</Typography>
          </Stack>
          <Stack alignItems='center' justifyContent='flex-start'>
            <Typography variant='h6'><strong>Se tornaram</strong></Typography>
            <Arrow width={200} />
          </Stack>
          <Stack alignItems='center'>
            <Typography variant='h3' fontSize={48} fontWeight={500}>+750.000</Typography>
            <Typography>Novas caixas da <strong>Mag.</strong></Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

const DesktopCard = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundColor: '#22EFE7',
          width: 'fit-content',
          mx: 'auto',
          px: { xs: 1, md: 8 },
          py: 6,
          borderRadius: '20rem',
          boxShadow: '0 0 40px #22EFE7'
        }}
      >
        <Stack direction='row' spacing={6} alignItems='center'>
          <Stack alignItems='center'>
            <Typography variant='h3' fontSize={58} fontWeight={500}>+145.000</Typography>
            <Typography><strong>Quilos</strong> de sucata</Typography>
          </Stack>
          <Stack alignItems='center' justifyContent='flex-start' sx={{ mt: '-52px !important' }}>
            <Typography sx={{ textDecoration: 'underline', mb: 2 }}>Em 2021</Typography>
            <Typography variant='h6'><strong>Se tornaram</strong></Typography>
            <Arrow width={150} />
          </Stack>
          <Stack alignItems='center'>
            <Typography variant='h3' fontSize={58} fontWeight={500}>+750.000</Typography>
            <Typography>Novas caixas da <strong>Mag.</strong></Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

export const TransformationCard = () => {
  const { width } = useWindowSize();

  return (
    width > 960 ? <DesktopCard /> : <MobileCard />
  )
}
