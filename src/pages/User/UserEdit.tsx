import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Switch, FormGroup, FormControlLabel } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '~components/Table'
import { GetOneUser, UserI } from '~services/api/userServices/getOneUser'
import { useEffect, useState } from 'react'
import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateUser } from '~services/api/userServices/UpdateUser'
import { toast } from 'react-toastify'

export interface UserProps {
  admin: boolean
  name: string
  token: string
}

export default function UserForm() {

  const [user, setUser] = useState({} as UserI)
  const { id } = useParams()

  const getLog = async (logId: string) => {
    const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
    const data = await GetOneUser(logId, user.token)
    console.log(data)
    setUser(data)
  }
  const navigate = useNavigate()
  const routeChange = () => {
    const path = '/usuarios'
    navigate(path)
  }
  useEffect(() => {
    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getLog(id)
    }
  }, [id])
  const handleSubmit = async () => {
    try {
      const userprp: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
      await UpdateUser(id, userprp.token, user)
      toast.success('usuário editado com successo!')
      routeChange()
    } catch (error) {
      toast.error('Algo deu errado, tente novamente!')
    }
  }
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        {JSON.stringify(user)}
        <Header title="Alterar Usuário"></Header>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome"
            name="Nome"
            autoComplete="Nome"

            value={user.name}
            onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
            InputLabelProps={{
              shrink: true,
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
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            value={user.email}
            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}

            InputLabelProps={{
              shrink: true,
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
            id="cidade"
            label="Cidade"
            name="cidade"
            value={user.city}
            onChange={(e) => { setUser({ ...user, city: e.target.value }) }}
            InputLabelProps={{
              shrink: true,
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
            value={user.state}
            onChange={(e) => { setUser({ ...user, state: e.target.value }) }}
            autoComplete="Estado"

            InputLabelProps={{
              shrink: true,
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
            value={user.phone}
            onChange={(e) => { setUser({ ...user, phone: e.target.value }) }}
            autoComplete="Telefone"

            InputLabelProps={{
              shrink: true,
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
            <FormControlLabel control={<Switch checked={user.admin} onChange={(e) => { setUser({ ...user, admin: !user.admin }) }} />} label="Administrador" />
            <FormControlLabel control={<Switch checked={user.superAdmin} onChange={(e) => { setUser({ ...user, superAdmin: !user.superAdmin }) }} />} label="Super Admim" />
          </FormGroup>

          <Button
            onClick={handleSubmit}
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
            onClick={routeChange}
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
