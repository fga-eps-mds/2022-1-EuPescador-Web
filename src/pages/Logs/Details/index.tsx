import { Grid, Box, Button, TextField, Switch, FormGroup, FormControlLabel, Typography } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../../../components/Sidebar'

export default function LogsDetails() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Detalhes do Log"></Header>
        <Box sx={{ mt: 1, display:'flex' }}>
          <Box sx={{ mt: 1, width: '50%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nome"
              name="name"
              autoFocus
              InputLabelProps={{
                style: { color: '#111111' },
              }}
              InputProps={{
                style: {
                  borderRadius: '8px',
                  color: '#111111',
                  width: '500px',

                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Classe"
              name="largeGroup"
              autoFocus
              InputLabelProps={{
                style: { color: '#111111' },
              }}
              InputProps={{
                style: {
                  borderRadius: '8px',
                  color: '#111111',
                  width: '500px',

                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Ordem"
              name="group"
              autoFocus
              InputLabelProps={{
                style: { color: '#111111' },
              }}
              InputProps={{
                style: {
                  borderRadius: '8px',
                  color: '#111111',
                  width: '500px',

                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label=" Espécie"
              name="species"
              autoFocus
              InputLabelProps={{
                style: { color: '#111111' },
              }}
              InputProps={{
                style: {
                  borderRadius: '8px',
                  color: '#111111',
                  width: '500px',

                },
              }}
            />
            <Box sx={{ mt: 1 , display: 'flex' , width: '20%' }}>
            <TextField
              margin="normal"
              required
              sx={{width: '50%'}}
              label="Massa"
              name="weight"
              autoFocus
              InputLabelProps={{
                style: { color: '#111111'},
              }}
              InputProps={{
                style: {
                  borderRadius: '8px',
                  color: '#111111',
                  width: '80%',

                },
              }}
            /><TextField
              margin="normal"
              required
              sx={{width: '50%'}}
              label="Tamanho"
              name="length"
              autoFocus
              InputLabelProps={{
                style: { color: '#111111'},
              }}
              InputProps={{
                style: {
                  borderRadius: '8px',
                  color: '#111111',
                  width: '80%',

                },
              }}
            />
            </Box>
          </Box>
          <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column'}}>
            <Typography>Foto</Typography>
            <img src="https://pbs.twimg.com/profile_images/1529487153402724352/ORsFoDlm_400x400.jpg" width={350} height={200}/>
            <Typography sx={{ mt: 5}}>Localização</Typography>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe width="350" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed">
                  </iframe><a href="https://fmovies-online.net"></a></div>
                    </div>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
