import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import AllOutIcon from '@mui/icons-material/AllOut'

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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '10%'

})

export function FishCard(props: FishCardProps) {
  return (
    <Paper
      sx={{
        p: 1,
        margin: 0,
        maxWidth: 330,
        flexGrow: 1,
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 170, height: 150 }}>
            <Img alt="complex" src={props.fish.imageUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                {props.fish.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.fish.size}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {props.fish.place}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {props.fish.weigth}
              </Typography>
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