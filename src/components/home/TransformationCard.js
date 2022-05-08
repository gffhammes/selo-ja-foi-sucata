import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Arrow from '../../../public/vectors/arrow.svg'

export const TransformationCard = () => {
  // <Typography sx={{ textDecoration: 'underline' }}>Em 2021</Typography>
  return (
    <Container>
      <Box sx={{ backgroundColor: '#22EFE7', width: 'fit-content', mx: 'auto', px: 8, py: 4, borderRadius: '20rem', boxShadow: '0 0 40px #22EFE7' }}>
        <Stack direction='row' spacing={6} alignItems='center'>
          <Stack alignItems='center'>
            <Typography variant='h3'><strong>+145.000</strong></Typography>
            <Typography><strong>Quilos</strong> de sucata</Typography>
          </Stack>
          <Stack alignItems='center'>
            <Typography variant='h6'><strong>Se tornaram</strong></Typography>
            <Arrow />
          </Stack>
          <Stack alignItems='center'>
            <Typography variant='h3'><strong>+750.000</strong></Typography>
            <Typography>Novas caixas da <strong>Mag.</strong></Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}
