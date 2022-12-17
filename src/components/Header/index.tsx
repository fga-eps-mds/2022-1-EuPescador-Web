import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'

import logo from '../../assets/images/logo.png'
export interface UserProps {
  admin: boolean
  name: string
  token: string
  superAdmin: boolean
}

const UserCard = () => {
  const user: UserProps = JSON.parse(
    localStorage.getItem('UserData')
  ) as UserProps
  return (
    <Box display="flex" sx={{ alignItems: 'center', pr: 8 }}>
      <Box>
        <Typography sx={{ fontWeight: 'bold', fontSize: '18px', mr: 2 }}>
          {user?.name ? user.name : 'Nome'}
        </Typography>
        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
          {user?.admin ? 'Administrador' : 'Usuário'}
        </Typography>
      </Box>
      <Avatar
        data-testid="avatar"
        sx={{ backgroundColor: '#0095D9', color: 'white' }}
      />
    </Box>
  )
}

export default function Header() {
  return (
    <AppBar
      className="appbar"
      position="static"
      sx={{
        color: 'black',
        backgroundColor: 'white',
        boxShadow: 0,
        mb: 5,
      }}
    >
      <Toolbar
        sx={{
          color: 'black',
          backgroundColor: '#E3F1FA',
          height: '100px',
        }}
      >
        <Box sx={{ justifyContent: 'center', margin: 'auto', pl: 22 }}>
          <img src={logo} width={140} height={61} />
        </Box>
        <UserCard />
      </Toolbar>
    </AppBar>
  )
}
