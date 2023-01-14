import {
  Box,
  Button,
  Grid,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel,
} from '@mui/material'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { TitlePage } from '../../components/TitlePage/TitlePage'
import { GetOneUser, UserI } from '../../services/api/userServices/getOneUser'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UpdateUser } from '../../services/api/userServices/UpdateUser'
import { toast } from 'react-toastify'
import { withStyles } from '@material-ui/core/styles'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

export interface UserProps {
  admin: boolean
  name: string
  token: string
}

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#0095D9',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0095D9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0095D9',
        borderWidth: 1,
      },
      '&:hover fieldset': {
        borderColor: '#0095D9',
        borderWidth: 2,
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0095D9',
        borderWidth: 2,
      },
    },
  },
})(TextField)

export default function UserForm() {
  const [user, setUser] = useState({} as UserI)
  const { id } = useParams()

  const getLog = async (logId: string) => {
    if (user) {
      const user: UserProps = JSON.parse(
        localStorage.getItem('UserData')
      ) as UserProps
      const data = await GetOneUser(logId, user.token)
      setUser(data)
    }
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
      const userprp: UserProps = JSON.parse(
        localStorage.getItem('UserData')
        
      ) as UserProps
      await UpdateUser(id, userprp.token, user)
      toast.success('usuário editado com successo!')
      routeChange()
    } catch (error) {
      toast.error('Algo deu errado, tente novamente!')
    }
  }
  return (
    <Grid container>
      <Header />
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <TitlePage title="Alterar Usuário" />
        {user && Object.keys(user).length > 0 && (
          <Box
            component="form"
            noValidate
            sx={{ mt: 1, width: '95%' }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <CssTextField
                margin="normal"
                required
                id="nome"
                label="Nome"
                name="Nome"
                autoComplete="Nome"
                value={user.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value })
                }}
                InputLabelProps={{
                  shrink: true,
                  style: { color: '#0095D9', fontWeight: 'bold' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '8px',
                    color: 'black',
                    width: '500px',
                    float: 'left',
                  },
                }}
              />
              <CssTextField
                margin="normal"
                required
                id="Estado"
                label="Estado"
                name="Estado"
                value={user.state}
                onChange={(e) => {
                  setUser({ ...user, state: e.target.value })
                }}
                autoComplete="Estado"
                InputLabelProps={{
                  shrink: true,
                  style: {
                    color: '#0095D9',
                    fontWeight: 'bold',
                  },
                }}
                InputProps={{
                  style: {
                    borderRadius: '8px',
                    color: 'black',
                    width: '500px',
                    float: 'right',
                  },
                }}
              />
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <CssTextField
                margin="normal"
                required
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                value={user.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value })
                }}
                InputLabelProps={{
                  shrink: true,
                  style: { color: '#0095D9', fontWeight: 'bold' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '8px',
                    color: 'black',
                    width: '500px',
                  },
                }}
              />
              <CssTextField
                margin="normal"
                required
                id="telefone"
                label="Telefone"
                name="Telefone"
                value={user.phone}
                onChange={(e) => {
                  setUser({ ...user, phone: e.target.value })
                }}
                autoComplete="Telefone"
                InputLabelProps={{
                  shrink: true,
                  style: { color: '#0095D9', fontWeight: 'bold' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '8px',
                    color: 'black',
                    width: '500px',
                  },
                }}
              />
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <CssTextField
                margin="normal"
                required
                id="cidade"
                label="Cidade"
                name="cidade"
                value={user.city}
                onChange={(e) => {
                  setUser({ ...user, city: e.target.value })
                }}
                InputLabelProps={{
                  shrink: true,
                  style: { color: '#0095D9', fontWeight: 'bold' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '8px',
                    color: 'black',
                    width: '500px',
                  },
                }}
              />

              <FormGroup style={{ width: '500px' }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={user.admin}
                      onChange={() => {
                        setUser({ ...user, admin: !user.admin })
                      }}
                    />
                  }
                  label="Administrador"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={user.superAdmin}
                      onChange={(e) => {
                        setUser({ ...user, superAdmin: !user.superAdmin })
                      }}
                    />
                  }
                  label="Super Admim"
                />
              </FormGroup>
            </Box>

            <Box display="flex" justifyContent="center" mt="100px">
              <Button
                onClick={routeChange}
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: '#0095D9',
                  borderRadius: '20px',
                  height: '40px',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  width: '180px',
                  mr: 5,
                }}
              >
                <CloseIcon
                  data-testid="close"
                  sx={{ color: 'white' }}
                />
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: '#0095D9',
                  borderRadius: '20px',
                  height: '40px',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  width: '180px',
                }}
              >
                <CheckIcon
                  data-testid="check"
                  sx={{ color: 'white' }}
                />
                Salvar
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  )
}
