import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import RightArrow from '../../../public/vectors/right-arrow.svg'
import DownArrow from '../../../public/vectors/down-arrow.svg'
import { useWindowSize } from '../../hooks/useWindowSize'
import CountUp from 'react-countup';

const countUpDefaultProps = {
  prefix: '+',
  separator: '.',
  useEasing: true,
  duration: 4,
}

const Waste = () => {
  return (
    <Stack alignItems='center'>
      <Box sx={{ fontSize: 58, fontWeight: 500}}>
        <CountUp start={140000} end={145000} {...countUpDefaultProps} />
      </Box>            
      <Typography><strong>Quilos</strong> de sucata</Typography>
    </Stack>
  )
}

const Arrow = () => {
  return (
    <Stack alignItems='center' justifyContent='flex-start'>
      <Typography variant='h6'><strong>Se tornaram</strong></Typography>
      <DownArrow height={150} />
    </Stack>
  )
}

const Boxes = () => {
  return (
    <Stack alignItems='center'>
      <Box sx={{ fontSize: 58, fontWeight: 500}}>
        <CountUp start={700000} end={750000} {...countUpDefaultProps} />
      </Box>
      <Typography>Novas caixas da <strong>Mag.</strong></Typography>
    </Stack>
  )
}

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
          <Waste />
          <Arrow />
          <Boxes />
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
          <Waste />
          <Stack alignItems='center' justifyContent='flex-start' sx={{ mt: '-52px !important' }}>
            <Typography sx={{ textDecoration: 'underline', mb: 2 }}>Em 2021</Typography>
            <Typography variant='h6'><strong>Se tornaram</strong></Typography>
            <RightArrow width={150} />
          </Stack>
          <Boxes />
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
