import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const ProcessIconText = ({ image, text, background }) => {
  return (
    <Stack >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10rem' }}>          
        <Box sx={{ height: '4rem', width: '4rem', position: 'absolute', zIndex: 10 }}>
          <Image src={image} alt={text} layout='fill' objectFit='contain' />
        </Box>
        <Box sx={{ height: '10rem', width: '10rem', position: 'absolute', zIndex: 9 }}>
          <Image src={background} alt='background' layout='fill' objectFit='contain' />
        </Box>
      </Box> 
      <Box sx={{ width: '10rem', mx: 'auto' }}>
        <Typography textAlign='center' fontWeight={800}>{text}</Typography>
      </Box> 
    </Stack>
  )
}
