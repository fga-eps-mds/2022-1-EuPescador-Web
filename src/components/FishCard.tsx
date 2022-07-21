import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

export default function FishCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="https://respostas.sebrae.com.br/wp-content/uploads/2014/05/Informa%C3%A7%C3%B5es-t%C3%A9cnicas-para-manter-um-viveiro-de-Til%C3%A1pia.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            tilapia
          </Typography>
          <Typography variant="body2" color="text.secondary">
            DESCRIÇÃO DO PEIXE
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}