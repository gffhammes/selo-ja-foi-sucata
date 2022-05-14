import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material"
import { Formik, Form } from "formik"
import Image from 'next/image'
import { defaultButtonStyle } from "../../constants/buttonStyle"
import { Input } from "../commons/form/Input"

const textFieldStyle = { backgroundColor: 'white.main', borderRadius: '.5rem' }

export const ContactForm = () => {

  const validate = (values) => {
    const errors = {};

    
    if (!values.firstName) {
      errors.firstName = 'Obrigatório';
    }

    if (!values.lastName) {
      errors.lastName = 'Obrigatório';
    }
  
    if (!values.email) {
      errors.email = 'Obrigatório';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email inválido';
    }
  
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values)
    resetForm();
  }

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
              validate={validate}
              onSubmit={handleSubmit}   
              validateOnBlur={false}     
              validateOnChange={false}
              enableReinitialize
            >
              {(props) => (        
                <Form noValidate>
                  <Typography gutterBottom>Seu nome*</Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>              
                    <Input name='firstName' placeholder="Nome" />
                    <Input name='lastName' placeholder="Sobrenome" />
                  </Stack>
                  <Typography sx={{ mt: 3 }} gutterBottom>Seu melhor e-mail*</Typography>
                  <Input name='email' placeholder="O seu e-mail aqui" type='email' />
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
