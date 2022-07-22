import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import AllOutIcon from '@mui/icons-material/AllOut'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '10%'

})

export default function fishcard() {
  return (
    <Paper
      sx={{
        p: 1,
        margin: 0,
        maxWidth: 330,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 170, height: 150 }}>
            <Img alt="complex" src='https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                Tilapia azul
              </Typography>
              <Typography variant="body2" color="text.secondary">
                122 cm
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Pantanal Brasil
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Até 120 KG
              </Typography >
            </Grid>
            <Grid container justifyContent='flex-end'>
              <AllOutIcon />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  )
}