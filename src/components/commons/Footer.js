import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import { links } from '../../constants/pages'

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
    <Stack>
      <Box sx={{ position: 'relative', height: '4rem', width: '7rem' }}>
        <Image src='/images/logo.png' layout='fill' objectFit='contain' alt='Selo Já Foi Sucata'/>
      </Box>
      <Box>        
        <Typography>Todos os direitos reservados ao Selo Já Foi Sucata</Typography>
        <Typography>Iniciativa sustentável da empresa Magnani Embalagens</Typography>
      </Box>
      <Box>
        <Typography>CNPJ: 00.000.000/0001-00</Typography>
        <Typography>Fone: (47) 9 9999-9999</Typography>
        <Typography>Rua João Silva, n° 123 - Rio do Sul</Typography>
      </Box>
    </Stack>
  )
}

const FooterSiteMap = () => {
  return (
    <div className="site-map">
      <ul style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        {links.map((link) => (
          <li key={link.name} className='nav-item'>
            <Link href={link.page} passHref >
              <a  className='nav-link'>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FooterSocial = () => {
  return (
    <Box>
      <Typography>Siga-nos nas redes sociais</Typography>
      <Stack direction='row' alignItems='center' spacing={1}>
        <Box bgcolor='black' sx={iconStyle}>
          <InstagramIcon color='white'/>
        </Box>
        <Typography>@selojafoisucata</Typography>
      </Stack>
      <Stack direction='row' alignItems='center' spacing={1}>
        <Box bgcolor='black' sx={iconStyle}>
          <InstagramIcon color='white'/>
        </Box>
        <Typography>@magnaniembalagens</Typography>
      </Stack>
    </Box>
  )
}

export const Footer = () => {
  return (
    <footer>
      <Box bgcolor='pink.main' sx={{ py: 4, width: '100%' }}>
        <Container>
          <Stack direction='row' justifyContent='space-between' alignItems='flex-start'>            
            <FooterMain />
            <FooterSiteMap />
            <FooterSocial />
          </Stack>
        </Container>
      </Box>
    </footer>
  )
}
