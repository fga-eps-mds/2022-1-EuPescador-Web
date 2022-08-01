import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { UserLogin } from '~services/api/userServices/login'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'UNB - 2022/01.'}
    </Typography>
  )
}

const theme = createTheme()

export default function Login() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    await UserLogin(data.get('email').toString(), data.get('password').toString())
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Grid container component="main" sx={{ height: '100vh', margin: 0, padding: 0 }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/qsHDqcJzHOA)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#003c8f' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entre na sua conta
          </Typography>
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
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disableElevation
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: '#1565c0',
                borderRadius: '10px',
                height: '42px',
                textTransform: 'capitalize',
                fontWeight: '700',
              }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {'Ainda não tem uma conta?'}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
