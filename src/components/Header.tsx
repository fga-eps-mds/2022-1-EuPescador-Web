import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

interface HeaderProps {
  title: string
}

export interface UserProps {
  admin: boolean
  name: string
  token: string
  superAdmin: boolean
}

const UserCard = () => {
  const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
  return (
    <Box display="flex" sx={{ alignItems: 'center' }}>
      <Avatar data-testid="avatar" sx={{ mr: 2 }} />
      <Box>
        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{user?.name ? user.name : 'Nome'}</Typography>
        <Typography>{user?.admin ? 'Administrador' : 'Usuário'}</Typography>
      </Box>
      <ArrowDropDownIcon />
    </Box>
  )
}

export default function Header({ title = 'Titulo' }: HeaderProps) {
  return (
    <AppBar
      className="appbar"
      position="static"
      sx={{ color: 'black', backgroundColor: 'white', paddingTop: '15px', boxShadow: 0 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: '700', fontSize: '24px' }}>
          {title}
        </Typography>
        <UserCard />
      </Toolbar>
    </AppBar>
  )
}