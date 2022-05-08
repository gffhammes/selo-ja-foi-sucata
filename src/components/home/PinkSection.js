import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const LeftText = () => {
  return (
    <Box sx={{ width: '40%' }}>
      <Typography variant='h4' fontWeight={600} gutterBottom>Portanto, se você ver a caixinha sorrindo...</Typography>
      <Typography sx={{ width: '34ch' }}>Saiba que você está recebendo uma embalagem reciclada e 100% reciclável, que #jáfoisucata!</Typography>
    </Box>
  )
}

const Stickers = () => {
  return (
    <Box sx={{ height: '30rem', width: '30rem', position: 'relative', my: '-8rem' }}>
      <Image layout="fill" src="/images/pink-section-stickers.png" alt="Stickers" objectFit='contain' />
    </Box>
  )
}

export const PinkSection = () => {
  return (
    <Box bgcolor='pink.main' >
      <Container>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>          
          <LeftText />
          <Stickers />
        </Stack>
      </Container>
    </Box>
  )
}
