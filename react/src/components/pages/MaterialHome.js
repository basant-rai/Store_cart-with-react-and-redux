import { Typography,Button,Box } from '@mui/material'
import React from 'react'

const MaterialHome = () => {
  return (
    <>
    <Typography variant="h1" color="error">
        This is heading
    </Typography>
    <Typography></Typography>
    <Button variant='contained' color='success' size='large'>Button</Button>
    <Button variant='contained' color='error' size='small'  disableElevation='true'>Button</Button>
    <Button variant='contained'  sx={{color:'blue',backgroundColor:"purple",}} size='small' disableElevation='true'>Button</Button>
    <Box >This is Box</Box>

    </>
  )
}

export default MaterialHome