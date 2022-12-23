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
      elevation={2}
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
        <Grid item xs={6}>
          <ButtonBase sx={{ width: 170, height: 150 }}>
            <Img alt="complex" src={props.fish.imageUrl} style={{ width: '140px', height: '110px' }} />
          </ButtonBase>
        </Grid>
        <Grid item xs={6}>
              <div style={{ 
                overflow: 'hidden', 
                textOverflow: 'ellipsis',
                borderBottom: '4px dotted #0095F9',
                borderTop: '4px dotted #0095F9',
                paddingTop:'15px',
                paddingBottom:'15px',
                textAlign: 'center',
                marginLeft: '5px',
                marginRight:'15px',  }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {props.fish.name}
                </Typography>
              </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
