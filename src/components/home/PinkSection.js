import { Box, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'

const LeftText = () => {
  return (
    <Box sx={{ width: { xs: '100%', md: '40%' } }}>
      <Typography variant='h4' fontWeight={600} gutterBottom>Portanto, se você ver a caixinha sorrindo...</Typography>
      <Typography>Saiba que você está recebendo uma embalagem reciclada e 100% reciclável, que #jáfoisucata!</Typography>
    </Box>
  )
}

const Stickers = () => {
  return (
    <Box
      sx={{
        height: { xs: '20rem', md: '30rem' },
        width: { xs: '100%', md: '30rem' },
        position: 'relative',
        mt: { xs: 0, md: '-4.5rem !important' },
        mb: { xs: '-3rem !important', md: '-4.5rem !important' },
      }}
    >
      <Image
        layout="fill"
        src="/images/pink-section-stickers.png"
        alt="Stickers"
        objectFit='contain'
        sizes='100% 100%'
      />
    </Box>
  )
}

const PinkSection = () => {
  return (
    <Box bgcolor='pink.main' >
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent='space-between'
          alignItems={{ xs: 'flex-start', md: 'center' }}
          spacing={4}
          sx={{
            pt: { xs: 10, md: 'unset' }
          }}
        >          
          <LeftText />
          <Stickers />
        </Stack>
      </Container>
    </Box>
  )
}

export default PinkSection;