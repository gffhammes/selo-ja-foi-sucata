import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import { links } from '../../constants/pages'
import LogoSelo from '../../../public/vectors/logo-selo-ja-foi-sucata.svg'
import LogoMag from '../../../public/vectors/logo-mag.svg'

const iconStyle = {
  p: 1,
  height: '2.5rem',
  width: '2.5rem',
  borderRadius: '10rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const FooterMain = () => {
  return (
    <Stack spacing={4}>
      <Stack direction='row' alignItems='center' spacing={3}>        
        <LogoMag height="75" width="115" />
        <LogoSelo height="75" width="115" />
      </Stack>
      <Stack sx={{ color: '#fff' }} spacing={{ xs: 2, md: 0 }}>        
        <Typography fontWeight={300}>Todos os direitos reservados ao Selo Já Foi Sucata</Typography>
        <Typography fontWeight={300}>Iniciativa sustentável da empresa Magnani Embalagens</Typography>
      </Stack>
      <Stack sx={{ color: '#fff' }}>
        <Typography fontWeight={300}>CNPJ: 00.000.000/0001-00</Typography>
        <Typography fontWeight={300}>Fone: (47) 9 9999-9999</Typography>
        <Typography fontWeight={300}>Rua João Silva, n° 123 - Rio do Sul</Typography>
      </Stack>
    </Stack>
  )
}

const FooterSiteMap = () => {
  return (
      <ul style={{ display: 'flex', gap: '1.5rem', flexDirection: 'column' }}>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.page} passHref >
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
  )
}

const FooterSocial = () => {
  return (
    <Stack spacing={2}>
      <Typography>Siga-nos nas redes sociais</Typography>
      <Link href='https://www.instagram.com/selojafoisucata/' passHref>
        <a target='_blank'>          
          <Stack direction='row' alignItems='center' spacing={1}>
            <Box bgcolor='black' sx={iconStyle}>
              <InstagramIcon color='white'/>
            </Box>
            <Typography fontWeight={300} sx={{ color: '#fff' }}>@selojafoisucata</Typography>
          </Stack>
        </a>
      </Link>
      <Link href='https://www.instagram.com/magembalagens/' passHref>
        <a target='_blank'>      
          <Stack direction='row' alignItems='center' spacing={1}>
            <Box bgcolor='black' sx={iconStyle}>
              <InstagramIcon color='white'/>
            </Box>
            <Typography fontWeight={300} sx={{ color: '#fff' }}>@magembalagens</Typography>
          </Stack>
        </a>
      </Link>
    </Stack>
  )
}

export const Footer = () => {
  return (
    <footer>
      <Box bgcolor='pink.main' sx={{ py: 10, width: '100%' }}>
        <Container>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='flex-start' spacing={5}>            
            <FooterMain />
            <FooterSiteMap />
            <FooterSocial />
          </Stack>
        </Container>
      </Box>
    </footer>
  )
}
