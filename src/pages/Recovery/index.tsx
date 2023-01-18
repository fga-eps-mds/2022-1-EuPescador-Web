import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import { RecoverPassword } from '../../services/api/userServices/login'
import { ToastContainer, toast, ToastOptions } from 'react-toastify'
import icon from '../../assets/icons/logo_login1.svg'
import userIcon from '../../assets/icons/senha_simbolo1.svg'
import bg from '../../assets/images/background_login.png'

export default function Recovery() {
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

    await RecoverPassword(data.get('email').toString())
      .then((res) => {
        toast.error('Senha alterada com sucesso, verifique seu email!', toastConfig)
      })
      .catch((err) => {
          toast.error('Não foi possível alterar a senha!', toastConfig)
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
              Digite o email da conta
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
                    <InputAdornment position="start">
                      <img src={userIcon} style={{width: "20px", height: "27px"}}/>
                    </InputAdornment>
                  ),
                  style: {
                    borderRadius: '8px',
                    color: '#0095D9',
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
                  Redefinir
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
