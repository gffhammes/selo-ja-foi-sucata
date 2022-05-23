import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import RightArrow from '../../../public/vectors/right-arrow.svg'
import DownArrow from '../../../public/vectors/down-arrow.svg'
import { useWindowSize } from '../../hooks/useWindowSize'
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const countUpDefaultProps = {
  prefix: '+',
  separator: '.',
  useEasing: true,
  duration: 4,
}

const DefaultCountUp = ({ end }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp start={viewPortEntered ? null : 0} end={end} {...countUpDefaultProps} >
      {({ countUpRef }) => (
        <VisibilitySensor
          active={!viewPortEntered}
          onChange={isVisible => {
            if (isVisible) {
              setViewPortEntered(true);
            }
          }}
          delayedCall
        >
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  )
}

const Waste = () => {

  return (
    <Stack alignItems='center'>
      <Box sx={{ fontSize: 58, fontWeight: 500}}>
        <DefaultCountUp end={145000} />
      </Box>            
      <Typography textAlign='center'><strong>Quilos</strong> de sucata foram<br/>coletados por nós localmente e</Typography>
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
        <DefaultCountUp end={750000} />
      </Box>
      <Typography textAlign='center'>Novas caixas<br/>da <strong>Mag.</strong></Typography>
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
