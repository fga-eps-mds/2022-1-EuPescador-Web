import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'

type Fish = {
  name: string
  size: string
  weigth: string
  place: string
  imageUrl: string
}

type FishCardProps = {
  fish: Fish
}

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '10%',
})

export function FishCard(props: FishCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 1,
        margin: 0,
        maxWidth: 330,
        flexGrow: 1,
        width: '330px',
        height: '160px',
        border: '1px solid #DDDFE4',
        borderRadius: '12px',
        backgroundColor: (theme) => (theme.palette.mode === 'dark' ? '#1A2027' : '#fff'),
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 170, height: 150 }}>
            <Img alt="complex" src={props.fish.imageUrl} style={{ width: '140px', height: '110px' }} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '16px' }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {props.fish.name}
                </Typography>
              </div>

              <Typography variant="body2" color="text.secondary">
                {props.fish.size}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.fish.place}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.fish.weigth}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
