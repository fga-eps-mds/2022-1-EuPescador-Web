import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
/*import getMuiTheme from '@mui/styles/getMuiTheme'*/

const UserCard = () => {
  return (
    <Box display='flex' sx={{alignItems: 'center'}}>
      <Avatar sx={{mr:2}} />
      <Box>
        <Typography>Fulano de tal</Typography>
        <Typography>Administrador</Typography>
      </Box>
      <ArrowDropDownIcon/>
    </Box>
  )
}

export default function Header() {
  return (
      <AppBar position="static" sx={{ color: 'black' , backgroundColor: 'white'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          Titulo do header
          </Typography>
        <UserCard />
        </Toolbar>
      </AppBar>
  )
}
