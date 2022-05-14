import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'

const textFieldStyle = {
  borderRadius: '.5rem',
  ".MuiInputBase-root": {
    backgroundColor: '#fff'
  },
}

export const Input = ({ name, placeholder, ...props }) => {
  const [field, meta, helpers] = useField({ name })

  return (
    <TextField
      {...field}
      {...props}
      bgcolor='pink.main'
      sx={textFieldStyle}
      color='pink'
      variant="outlined"
      placeholder={placeholder}
      fullWidth
      error={!!(meta.error && meta.touched)}
      helperText={!!(meta.error && meta.touched) && meta.error}
    />
                    
  )
}
