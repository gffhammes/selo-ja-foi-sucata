import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import Image from 'next/image'
import { defaultButtonStyle } from "../../constants/buttonStyle"

const galleryImages = [
  '/images/gallery01.png',
  '/images/gallery02.png',
  '/images/gallery03.png',
  '/images/gallery04.png',
  '/images/gallery05.png',
  '/images/gallery06.png',
]

const textFieldStyle = { backgroundColor: 'white.main', borderRadius: '.5rem' }

const Gallery = () => {
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {galleryImages.map((image, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <Box sx={{ height: { xs: '10rem', md: '20rem' }, width: '100%', position: 'relative' }}>
              <Image src={image} alt={index} layout='fill' objectFit='cover' style={{ borderRadius: '1rem' }}/>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const ContactForm = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={15} alignItems='center'>
      <Box sx={{ width: 'fit-content' }}>
        <Typography variant='h2' fontSize={42} sx={{ mb: 4, whiteSpace: { xs: 'normal', md: 'nowrap' } }} >Quer fazer parte<br/>de um mundo mais<br/>sustentável?</Typography>
        <Typography fontSize={18} sx={{ maxWidth: '30ch' }}>
          Receba em primeira mão os novos conteúdos, eventos e oportunidades relacionados ao consumo consciente no Brasil e no mundo!
        </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>        
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
          onSubmit={(values) => {console.log(values)}}        
        >
          {(props) => (        
            <Form noValidate>
              <Typography gutterBottom>Seu nome*</Typography>
              <Stack direction='row' spacing={2}>              
                <TextField sx={textFieldStyle} color='pink' onChange={props.handleChange} name='firstName' variant="outlined" placeholder="Nome" value={props.values.firstName} fullWidth />
                <TextField sx={textFieldStyle} color='pink' onChange={props.handleChange} name='lastName' variant="outlined" placeholder="Sobrenome" value={props.values.lastName} fullWidth />
              </Stack>
              <Typography sx={{ mt: 3 }} gutterBottom>Seu melhor e-mail*</Typography>
              <TextField sx={textFieldStyle} fullWidth color='pink' onChange={props.handleChange} name='email' variant="outlined" type='email' placeholder="O seu e-mail aqui" value={props.values.email} />
              <Button sx={{ ...defaultButtonStyle, mt: 3 }} fullWidth color='red' variant='contained' type='submit'>Enviar</Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Stack>
  )
}

export const GalleryAndContact = () => {
  return (
    <Box sx={{ 
      height: 'fit-content',       
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url("images/green-background-reverse-home.png")',
      width:'100%',
      backgroundPosition: 'bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%'
    }}
  >      
      <Container sx={{ py: 20 }}>
        <Stack spacing={20}>          
          <Gallery />
          <ContactForm />
        </Stack>
      </Container>
    </Box>
  )
}
