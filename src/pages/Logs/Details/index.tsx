/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Grid, Box, TextField, Typography, ButtonBase, Button, Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../../../components/Sidebar'
import { GetOneFishLog } from '../../../services/api/fishLogServices/getOneFishLog'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export interface FishLogProps {
  coordenates: {
    latitude: number
    longitude: number
  }
  family: string
  group: string
  largeGroup: string
  name: string
  photo: string | null
  reviewed: boolean
  species: string
  length: number
  weight: number
}

export default function LogsDetails() {
  const [log, setLog] = useState({} as FishLogProps)
  const { id } = useParams()

  const getLog = async (logId: string) => {
    const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
    const data = await GetOneFishLog(logId, user.token)
    console.log(data.photo)
    setLog(data)
  }

  const loadingMessage = 'Carregando...'

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getLog(id)
    }
  }, [id])

  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Detalhes do Log"></Header>
        <Box sx={{ mt: 5, ml: 5, display: 'flex' }}>
          <Box sx={{ mt: 2, width: '50%' }}>
            <TextField
              margin="normal"
              fullWidth
              label="Nome"
              name="name"
              value={log.name || loadingMessage}
              InputLabelProps={{
                style: { color: '#111111' },
              }}
              InputProps={{
                style: {
                  borderRadius: '25px',
                  color: '#111111',
                  width: '500px',
                },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Classe"
              name="largeGroup"
              value={log.largeGroup || loadingMessage}
              InputLabelProps={{
                style: { color: '#111111' },
              }}
              InputProps={{
                style: {
                  borderRadius: '25px',
                  color: '#111111',
                  width: '500px',
                },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Ordem"
              name="group"
              value={log.group || loadingMessage}
              InputLabelProps={{
                style: { color: '#111111' },
              }}
              InputProps={{
                style: {
                  borderRadius: '25px',
                  color: '#111111',
                  width: '500px',
                },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              label=" Espécie"
              name="species"
              value={log.species || loadingMessage}
              InputLabelProps={{
                style: { color: '#111111' },
              }}
              InputProps={{
                style: {
                  borderRadius: '25px',
                  color: '#111111',
                  width: '500px',
                },
              }}
            />
            <Box sx={{ display: 'flex', width: '50%', mt: 2 }}>
              <TextField
                label="Massa(g)"
                value={log.weight || loadingMessage}
                sx={{ mr: 4 }}
                InputLabelProps={{
                  style: { color: '#111111' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                    color: '#111111',
                  },
                }}
              />
              <TextField
                label="Tamanho(Cm)"
                name="length"
                value={log.length || loadingMessage}
                InputLabelProps={{
                  style: { color: '#111111' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                    color: '#111111',
                  },
                }}
              />
            </Box>
            <Typography sx={{ mt: 2 }}>Status: {log.reviewed ? 'Aprovado' : 'Pendente'}</Typography>
            <Button
              sx={{
                display: 'flex',
                width: '400px',
                height: '40px',
                backgroundColor: '#ACEA97',
                borderRadius: '12px',
                mt: '140px',
                color: '#000000',
                fontSize: '14px',
                fontWeight: '',
              }}
            >
              APROVAR
            </Button>
          </Box>
          <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography>Foto</Typography>
            {log.photo ? (
              <img
                src={`data:image/png;base64,${log.photo}`}
                width={400}
                height={250}
                style={{ borderRadius: '20px' }}
              />
            ) : (
              <Alert severity="info">Opa, parece que este registro não possui uma foto.</Alert>
            )}
            <Typography sx={{ mt: 5 }}>Localização</Typography>

            {!!log.coordenates && (
              <MapContainer
                center={[log.coordenates.latitude, log.coordenates.longitude]}
                zoom={13}
                scrollWheelZoom
                style={{ height: '40vh' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[log.coordenates.latitude, log.coordenates.longitude]}>
                  <Popup>Esta é a localização do {log.name}</Popup>
                </Marker>
              </MapContainer>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
