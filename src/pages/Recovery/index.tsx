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
      .then(() => {
        toast.success('Email de redefinição enviado, verifique seu email!', toastConfig)
      })
      .catch((err) => {
        if(err.response.status === 404){
          toast.warning("Usuário não encontrado!", toastConfig)
        }else if(err.response.status === 408){
          toast.warning("Email de redefinição já enviado. Verifique o email da conta!", toastConfig)
        }else{
          toast.error('Não foi possível alterar a senha!', toastConfig)
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
          xs={false}
          item
          md={7}
          sm={4}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundColor: '#E3F1FA',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <Grid item xs={12} sm={8} md={5} >
          <Box
            sx={{
              mx: 4,
              my: 8,
              flexDirection: 'column',
              alignItems: 'center',
              display: 'flex',

            }}
          >
            <Box>
              <img className='logo' src={icon}/>
            </Box>
            <Typography component="h1" variant="h5" sx={{
              mt: 3,
              fontWeight: '900',
              mb: 3,
              fontSize: '42'
            }}>
              Digite o email da conta
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                required
                className="textfield"
                id="email"
                margin="normal"
                fullWidth
                name="email"
                autoComplete="email"
                label="E-mail"
                autoFocus
                sx={{
                  fieldset: { borderColor: "#0095D9" }
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
                InputLabelProps={{
                  style: { color: '#111111' },
                }}
              />

              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Button
                  type="submit"
                  fullWidth
                  data-testid="login-button"
                  disableElevation
                  variant="contained"
                  sx={{
                    mb: 2,
                    mt: 2,
                    borderRadius: '10px',
                    backgroundColor: '#0095D9',
                    width: '350px',
                    height: '50px',
                    fontSize: '18px',
                    textTransform: 'capitalize',
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
