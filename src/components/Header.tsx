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

const UserCard = () => {
  const user = localStorage.getItem('user')
  return (
    <Box display='flex' sx={{alignItems: 'center'}}>
      <Avatar sx={{mr:2}} />
      <Box>
        <Typography sx={{fontWeight: 'bold', fontSize: '14px'}}>{user}</Typography>
        <Typography>Administrador</Typography>
      </Box>
      <ArrowDropDownIcon/>
    </Box>
  )
}

export default function Header({ title = 'Titulo' }: HeaderProps) {
  return (
      <AppBar position="static" sx={{ color: 'black' , backgroundColor: 'white', paddingLeft: '32px' , paddingTop: '15px', boxShadow : 0}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px'}}>
          {title}
          </Typography>
        <UserCard />
        </Toolbar>
      </AppBar>
  )
}
