import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import { UserLogin } from '../../services/api/userServices/login'
import { ToastContainer, toast, ToastOptions } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import icon from '../../assets/icons/logo_login1.svg'
import passwordIcon from '../../assets/icons/senha_simbolo2.svg'
import userIcon from '../../assets/icons/senha_simbolo1.svg'
import bg from '../../assets/images/background_login.png'
import AccountCircle from '@mui/icons-material/AccountCircle'
// eslint-disable-next-line @typescript-eslint/no-explicit-any

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const toastConfig = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    } as ToastOptions

    await UserLogin(data.get('email').toString(), data.get('password').toString())
      .then((res) => {
        if(res.data.admin || res.data.superAdmin){
          navigate('/admin', { replace: true })
          localStorage.setItem('UserData', JSON.stringify(res.data))
          window.location.href = '/dados'
          navigate('/dados', { replace: true })
        }else{
          toast.warning('Você não tem permissão para acessar essa página', toastConfig)
        }
      })
      .catch((err) => {
        if(err.response.status === 401){
          toast.error('E-mail ou senha incorretos', toastConfig)
        }else{
          toast.error('Ooops! Algo deu errado! Tente novamente', toastConfig)
        }

      })
  }

  return (
    <>
      <ToastContainer />
      <Grid container component="main" sx={{ height: '100vh', margin: 0, padding: 0, bgcolor: '#E3F1FA' }}>
        <CssBaseline />
        <Grid
          className="imagem"
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#E3F1FA',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >
            <Box>
              <img className='logo' src={icon}/>
            </Box>
            <Typography component="h1" variant="h5" sx={{
              mt: 3,
              mb: 3,
              fontWeight: '900',
              fontSize: '42'
            }}>
              Entre na sua conta
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                className="textfield"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  fieldset: { borderColor: "#0095D9" }
                }}
                InputLabelProps={{
                  style: { color: '#111111' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <img src={userIcon} style={{width: "20px", height: "27px"}}/>
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: '8px',
                    color: '#111111',
                  },
                }}
              />

              <TextField
                className="textfield"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  fieldset: { borderColor: "#0095D9" }
                }}
                InputLabelProps={{
                  style: { color: '#111111' },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={passwordIcon} style={{width: "20px", height: "27px"}}/>
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: '8px',
                    color: '#0095D9'
                  },
                }}
              />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disableElevation
                  data-testid="login-button"
                  sx={{
                    mt: 2,
                    mb: 2,
                    backgroundColor: '#0095D9',
                    borderRadius: '10px',
                    height: '50px',
                    width: '350px',
                    textTransform: 'capitalize',
                    fontSize: '18px',
                    fontWeight: '900',
                  }}
                >
                  Entrar
                </Button>
                
                <Link href="/" variant="body2" sx={{
                  color: '#0095D9',
                  fontWeight: '850',
                  fontSize: '15px',
                }}>
                  {'Esqueci minha senha'}
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
