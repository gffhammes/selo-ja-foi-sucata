import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const ProcessIconText = ({ image, text, background }) => {
  return (
    <Stack >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10rem' }}>          
        <Box sx={{ height: '5rem', width: '5rem', position: 'absolute', zIndex: 10 }}>
          <Image src={image} alt={text} layout='fill' objectFit='contain' />
        </Box>
        <Box sx={{ height: '10rem', width: '10rem', position: 'absolute', zIndex: 9 }}>
          <Image src={background} alt='background' layout='fill' objectFit='contain' />
        </Box>
      </Box> 
      <Box sx={{ maxWidth: '14ch', mx: 'auto', mt: 2 }}>
        <Typography textAlign='center'>{text}</Typography>
      </Box> 
    </Stack>
  )
}
