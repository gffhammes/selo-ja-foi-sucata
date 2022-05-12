import { Box, Button, Container, IconButton, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { links } from '../../constants/pages'
import { useWindowSize } from '../../hooks/useWindowSize'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();

  const handleMenuOpenToggle = () => {
    setMenuOpen(current => !current);
  }

  return (
    <nav className="navbar" style={{ zIndex: 999, position: 'fixed' }}>
      <Container>
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
            {/* <a href="#" className="ham">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a> */}

            {width > 960 ?
            
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
            </div> :

            <IconButton onClick={handleMenuOpenToggle}>
              <MenuIcon />
            </IconButton>

            }

            <Box
              sx={{
                position: 'fixed',
                width: '70vw',
                height: '100vh',
                top: 0,
                right: 0,
                backgroundColor: 'pink.main',
                transition: '300ms ease-out',
                transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
              }}
            >
              <Stack>
                
                <IconButton onClick={handleMenuOpenToggle}>
                  <CloseIcon />
                </IconButton>

                <div className="navlinks">
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
            </Box>

            
        </Stack>
      </Container>
    </nav>
  )
}
