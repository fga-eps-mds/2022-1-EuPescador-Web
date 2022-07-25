import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const UserCard = () => {
  const user = localStorage.getItem('user')
  return (
    <Box display='flex' sx={{alignItems: 'center'}}>
      <Avatar sx={{mr:2}} />
      <Box>
        <Typography>{user}</Typography>
        <Typography>Administrador</Typography>
      </Box>
      <ArrowDropDownIcon/>
    </Box>
  )
}

export default function Header({title="Titulo"} : any) {
  return (
      <AppBar position="static" sx={{ color: 'black' , backgroundColor: 'white'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          {title}
          </Typography>
        <UserCard />
        </Toolbar>
      </AppBar>
  )
}
