import { Box, Button, Container, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { links } from '../../constants/pages'

export const Navbar = () => {
  return (
    <nav className="navbar" style={{ zIndex: 999 }}>
      <Container sx={{ height: '100%' }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' height={'100%'}>
          <Link href='/' passHref>
            <a>
              <Box sx={{ position: 'relative', height: '6rem', width: '10rem' }}>
                <Image
                  src='/images/logo.png'
                  alt='Selo Já Foi Sucata'
                  layout='fill'
                  objectFit='contain'
                />
              </Box>
            </a>
          </Link>
            <a href="#" className="ham">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a>

            <div className="navlinks">
              <ul style={{ display: 'flex', gap: '1rem' }}>
                {links.map((link) => (
                  <li key={link.name} className='nav-item'>
                    <Link href={link.page} passHref >
                      <a  className='nav-link'>{link.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
        </Stack>
      </Container>
    </nav>
  )
}
