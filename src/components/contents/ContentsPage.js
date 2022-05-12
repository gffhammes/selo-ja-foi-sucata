import React from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Image from 'next/image';

export const ContentsPage = () => {
  return (
    <Box bgcolor='pink.main' sx={{ height: '100vh', width: '100%', pt: '20rem' }}>
      <Container>
        <Stack direction='row' justifyContent='space-between'>          
          <Box>
            <Typography>Conteúdos</Typography>
            <Typography>Confira nossos conteúdos e mergulhe de cabeça nessa transformação.</Typography>
          </Box>

          <Stack direction='row' sx={{ cursor: 'pointer', height: 'fit-content' }}>
            <AddCircleOutlineIcon color='white' />
            <Typography color='white.main' sx={{ textDecoration: 'underline' }}>Ver tudo</Typography>
          </Stack>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', width: '100%', height: '15rem' }}>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
