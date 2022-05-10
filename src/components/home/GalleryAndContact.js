import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import Image from 'next/image'

const galleryImages = [
  '/images/gallery01.png',
  '/images/gallery02.png',
  '/images/gallery03.png',
  '/images/gallery04.png',
  '/images/gallery05.png',
  '/images/gallery06.png',
]

const Gallery = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {galleryImages.map((image, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <Box sx={{ height: '20rem', width: '100%', position: 'relative' }}>
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
    <Stack direction='row' spacing={10}>
      <Box sx={{ width: 'fit-content' }}>
        <Typography variant='h2' fontSize={42} sx={{ mb: 4, whiteSpace: 'nowrap' }} >Quer fazer parte<br/>de um mundo mais<br/>sustentável?</Typography>
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
              <Typography>Seu nome*</Typography>
              <Stack direction='row'>              
                <TextField onChange={props.handleChange} name='firstName' variant="filled" label="Nome" value={props.values.firstName} fullWidth />
                <TextField onChange={props.handleChange} name='lastName' variant="filled" label="Sobrenome" value={props.values.lastName} fullWidth />
              </Stack>
              <Typography>Seu melhor e-mail*</Typography>
              <TextField fullWidth onChange={props.handleChange} name='email' variant="filled" type='email' label="O seu e-mail aqui" value={props.values.email} />
              <Button color='red' variant='contained' type='submit'>Enviar</Button>
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
      backgroundSize: '100%',
      paddingTop: 8,
    }}
  >      
      <Container>
        <Gallery />
        <ContactForm />
      </Container>
    </Box>
  )
}
