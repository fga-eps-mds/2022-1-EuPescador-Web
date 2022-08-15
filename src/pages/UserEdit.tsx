import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Switch, FormGroup, FormControlLabel } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'
import TableComponent from '~components/Table'
import { GetAllUsers, UserI } from '~services/api/userServices/getAllUsers'
import { useEffect, useState } from 'react'
import * as React from 'react'


export default function UserForm() {
  const handleSubmit = () => {
    console.log('clicou no submit form')
  }

  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Alterar Usuário"></Header>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            InputLabelProps={{
              style: { color: '#111111' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                color: '#111111',
                width: '500px',

              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            InputLabelProps={{
              style: { color: '#111111' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                color: '#111111',
                width: '500px'

              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="cidade"
            label="Cidade"
            name="cidade"
            autoComplete="cidade"
            autoFocus
            InputLabelProps={{
              style: { color: '#111111' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                color: '#111111',
                width: '500px',

              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome"
            name="Nome"
            autoComplete="Nome"
            autoFocus
            InputLabelProps={{
              style: { color: '#111111' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                color: '#111111',
                width: '500px',

              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="Estado"
            label="Estado"
            name="Estado"
            autoComplete="Estado"
            autoFocus
            InputLabelProps={{
              style: { color: '#111111' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                color: '#111111',
                width: '500px',

              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Telefone"
            name="Telefone"
            autoComplete="Telefone"
            autoFocus
            InputLabelProps={{
              style: { color: '#111111' },
            }}
            InputProps={{
              style: {
                borderRadius: '8px',
                color: '#111111',
                width: '500px',

              },
            }}
          />

          <FormGroup>
            <FormControlLabel control={<Switch />} label="Administrador" />
            <FormControlLabel control={<Switch />} label="Super Admim" />
          </FormGroup>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#006400	',
              borderRadius: '20px',
              height: '50px',
              textTransform: 'capitalize',
              fontWeight: '200',
              width: '250px',

            }}
          >
            Salvar
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#006400	',
              borderRadius: '20px',
              height: '50px',
              textTransform: 'capitalize',
              fontWeight: '200',
              width: '250px',


            }}
          >

            Cancelar
          </Button>
        </Box>
      </Grid>
    </Grid>
  )

}
