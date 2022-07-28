
import { createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Typography from '@mui/material/Typography'
import "./styles.css"



type Fish = {
  name: string;
  size: string;
  weigth: string;
  place: string;
  imageUrl: string;
}
type FishCardProps = {
  fish: Fish;
}


export function FishCard(props: FishCardProps) {
  return (
    <Box className="boxCard" sx={{ mr: 2 }}>
      <CardMedia
        className="imageCard"
        component="img"
        image={props.fish.imageUrl}
        alt="Foto peixe"
      />
      <Box className='infoCard'>
        <Box sx={{ mt: 0.5 }}>
          <CardContent sx={{ flex: 'auto' }}>
            <Typography component="div" variant="subtitle2" gutterBottom >
              {props.fish.name}
            </Typography>
            <Typography variant="caption" color="text.secondary" component="div" sx={{ pt: 0.5 }}>
              {props.fish.size}
            </Typography>
            <Typography variant="caption" color="text.secondary" component="div">
              {props.fish.place}
            </Typography>
            <Typography variant="caption" color="text.secondary" component="div">
              {props.fish.weigth}
            </Typography>
          </CardContent>
          <Box className='areaButton'>
            <IconButton aria-label="open" sx={{ height: 30, width: 30, ml: '98.5%' }}>
              <OpenInNewIcon sx={{ height: 20, width: 20 }} />
            </IconButton>
          </Box>



        </Box>
      </Box>
    </Box>


  )
}