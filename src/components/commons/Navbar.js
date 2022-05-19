import { Box, Button, Container, IconButton, Stack } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { links } from '../../constants/pages'
import { useWindowSize } from '../../hooks/useWindowSize'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useWindowScroll } from '../../hooks/useWindowScroll'
import { useRouteData } from '../../hooks/useRouteData'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const scroll = useWindowScroll();
  const { name, page, navbarColor } = useRouteData();

  const isScrolled = useMemo(() => scroll > 0, [scroll])

  const handleMenuOpenToggle = () => {
    setMenuOpen(current => !current);
  }

  return (
    <Box
      component='nav'
      sx={{
        zIndex: 999,
        position: 'fixed',
        width: '100%',
        height: 'fit-content',
        transition: '150ms ease',
        backgroundColor: isScrolled ? navbarColor : 'transparent',
        boxShadow: isScrolled ? 20 : 0,
      }}
    >
      <Container sx={{ py: isScrolled ? { xs: '.25rem', md: '1rem' } : { xs: '1rem', md: '3rem' }, transition: '150ms ease' }}>
        <Stack direction='row' justifyContent='space-between' alignItems='center' height={'100%'}>
          <Link href='/' passHref>
            <a>
              <Box sx={{ position: 'relative', height: { xs: '3rem', md: '4rem' }, width: '10rem' }}>
                <Image
                  src='/images/logo.png'
                  alt='Selo Já Foi Sucata'
                  layout='fill'
                  objectFit='contain'
                  objectPosition='left'
                />
              </Box>
            </a>
          </Link>

            {width > 960 ?
            
            <div className="navlinks">
              <ul style={{ display: 'flex', gap: '1rem' }}>
                {links.map((link) => (
                  <Box component='li' key={link.name} sx={{ listStyle: 'none' }}>
                    <Link href={link.page} passHref >
                      <a className='nav-link' style={{ backgroundColor: page === link.page ? 'white' : '' }}>{link.name}</a>
                    </Link>
                  </Box>
                ))}
                <Box component='li' sx={{ listStyle: 'none' }}>
                  <a href='http://onelink.to/9e9cdq' target='_blank' className='nav-link' rel="noreferrer">Baixe o Cataki</a>
                </Box>
              </ul>
            </div> :

            <IconButton onClick={handleMenuOpenToggle} sx={{ zIndex: 999 }} size="large" >
              {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
            </IconButton>

            }

            <Box
              sx={{
                position: 'fixed',
                width: '70vw',
                height: '100vh',
                top: 0,
                right: 0,
                backgroundColor: navbarColor,
                transition: '300ms ease-out',
                transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                boxShadow: menuOpen ? 22 : 0,
              }}
            >
                
              <div style={{ paddingTop: '5rem' }} >
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1rem 2em' }}>
                  {links.map((link) => (
                    <li key={link.name} style={{ listStyle: 'none' }} onClick={handleMenuOpenToggle}>
                      <Link href={link.page} passHref>
                        <a className='nav-link' style={{ backgroundColor: page === link.page ? 'white' : '' }}>{link.name}</a>
                      </Link>
                    </li>
                  ))}
                  <Box component='li' sx={{ listStyle: 'none' }}>
                    <a href='http://onelink.to/9e9cdq' target='_blank' className='nav-link' rel="noreferrer">Baixe o Cataki</a>
                  </Box>
                </ul>
              </div>
            </Box>

            
        </Stack>
      </Container>
    </Box>
  )
}
