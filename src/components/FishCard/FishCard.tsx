import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'

type Fish = {
  name: string
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
        border: '2px solid #0095F9',
        borderRadius: '12px',
        backgroundColor: '#FFF' 
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item>
          <ButtonBase sx={{ width: 170, height: 150 }}>
            <Img alt="complex" src={props.fish.imageUrl} style={{ width: '140px', height: '110px' }} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <div
                  style={{
                    borderBottom: '4px dotted #0095F9',
                    width: '100px',
                    marginBottom: '5px',
                  }}
                ></div>
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
                <div
                  style={{
                    borderBottom: '4px dotted #0095F9',
                    width: '100px',
                    paddingTop: '3px',
                  }}
                ></div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
