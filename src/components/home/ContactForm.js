import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import Image from 'next/image'
import { defaultButtonStyle } from "../../constants/buttonStyle"

const textFieldStyle = { backgroundColor: 'white.main', borderRadius: '.5rem' }

export const ContactForm = () => {
  return (
    <Box bgcolor='green.main' sx={{ py: { xs: 10, md: 15 }, zIndex: 5, position: 'relative' }}>
      <Container>        
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 5, md: 15 }} alignItems={{ xs: 'flex-start', sm: 'center', md: 'flex-start' }}>
          <Box sx={{ width: 'fit-content' }}>
            <Stack direction={{ xs: 'column', sm: 'row', md: 'column' }} justifyContent='space-between' alignItems={{ xs: 'flex-start', sm: 'center', md: 'flex-start' }} spacing={4}>              
              <Typography variant='h2' fontSize={42} sx={{ whiteSpace: { xs: 'normal', md: 'nowrap' } }} >Quer fazer parte<br/>de um mundo mais<br/>sustentável?</Typography>
              <Typography fontSize={18} sx={{ maxWidth: '30ch' }}>
                Receba em primeira mão os novos conteúdos, eventos e oportunidades relacionados ao consumo consciente no Brasil e no mundo!
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ width: '100%' }}>        
            <Formik
              initialValues={{ firstName: '', lastName: '', email: '' }}
              onSubmit={(values) => {console.log(values)}}        
            >
              {(props) => (        
                <Form noValidate>
                  <Typography gutterBottom>Seu nome*</Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>              
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
      </Container>
    </Box>
  )
}
