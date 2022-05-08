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
    <Stack direction='row'>
      <Box>
        <Typography variant='h2'>Quer fazer parte de um mundo mais sustentável?</Typography>
        <Typography>
          Receba em primeira mão os novos conteúdos, eventos e oportunidades relacionados ao consumo consciente no Brasil e no mundo!
        </Typography>
      </Box>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        onSubmit={(values) => {console.log(values)}}
      >
        {(props) => (        
          <Form noValidate>
            <TextField onChange={props.handleChange} name='firstName' variant="outlined" placeholder="Nome*" value={props.values.firstName} />
            <TextField onChange={props.handleChange} name='lastName' variant="outlined" placeholder="Sobrenome*" value={props.values.lastName} />
            <TextField onChange={props.handleChange} name='email' variant="outlined" type='email' placeholder="O seu e-mail aqui*" value={props.values.email} />
            <Button color='red' variant='contained' type='submit'>Enviar</Button>
          </Form>
        )}
      </Formik>
    </Stack>
  )
}




export const GalleryAndContact = () => {
  return (
    <Box>      
      <Container>
        <Gallery />
        <ContactForm />
      </Container>
    </Box>
  )
}
