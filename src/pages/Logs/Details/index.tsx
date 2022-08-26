/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Grid, Box, TextField, Typography, ButtonBase, Button, Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../../../components/Sidebar'
import { GetOneFishLog } from '../../../services/api/fishLogServices/getOneFishLog'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import '../../../assets/styles/DetailsButtons.css'
import { UpdateFishLog } from '~services/api/fishLogServices/updateFishLog'

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
  length: string
  weight: string
}

export default function LogsDetails() {
  const [log, setLog] = useState({} as FishLogProps)
  const { id } = useParams()

  const getLog = async (logId: string) => {
    const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
    const data = await GetOneFishLog(logId, user.token)
    console.log(data)
    setLog(data)
  }

  const loadingMessage = 'Carregando...'

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getLog(id)
    }
  }, [id])

  const atualizaLog = async () => {
    const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
    const dadinhos = await UpdateFishLog(
      id,
      log.name,
      log.largeGroup,
      log.group,
      log.species,
      log.coordenates.latitude ? log.coordenates.latitude.toString() : null,
      log.coordenates.longitude ? log.coordenates.longitude.toString() : null,
      log.photo,
      log.length,
      log.weight,
      log.reviewed,
      true,
      true,
      true,
      user.token,
    )
    console.log(dadinhos)
    routeChange()
  }

  const navigate = useNavigate()
  const routeChange = () => {
    const path = '/logs'
    navigate(path)
  }

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
              defaultValue={log.name || loadingMessage}
              key={log.name}
              onChange={(e) => (log.name = e.target.value)}
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
              defaultValue={log.largeGroup || loadingMessage}
              key={log.largeGroup}
              onChange={(e) => (log.largeGroup = e.target.value)}
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
              defaultValue={log.group || loadingMessage}
              key={log.group}
              onChange={(e) => (log.group = e.target.value)}
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
              defaultValue={log.species || loadingMessage}
              key={log.species}
              onChange={(e) => (log.species = e.target.value)}
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
                defaultValue={log.weight || loadingMessage}
                key={log.weight}
                onChange={(e) => (log.weight = e.target.value)}
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
                defaultValue={log.length || loadingMessage}
                key={log.length}
                onChange={(e) => (log.length = e.target.value)}
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
            <Box sx={{ display: 'flex', width: '50%', mt: 10, ml: 0 }}>
              <button className="btn-save" onClick={atualizaLog}>
                SALVAR
              </button>
              <button className="btn-cancel" onClick={routeChange}>
                CANCELAR
              </button>
            </Box>
            <Button
              sx={{
                display: 'flex',
                width: '50%',
                height: '40px',
                backgroundColor: '#ACEA97',
                borderRadius: '12px',
                mt: 2,
                color: '#000000',
                fontSize: '14px',
                fontWeight: '',
              }}
            >
              APROVAR
            </Button>
          </Box>
          <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ mb: 1, fontWeight: 'bold' }}>Foto:</Typography>
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

            <Typography sx={{ mt: 5, mb: 1, fontWeight: 'bold' }}>Localização:</Typography>

            {log.coordenates && log.coordenates.latitude && log.coordenates.longitude ? (
              <MapContainer
                center={[log.coordenates.latitude, log.coordenates.longitude]}
                zoom={13}
                scrollWheelZoom
                style={{ height: '40vh', borderRadius: '20px solid' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[log.coordenates.latitude, log.coordenates.longitude]}>
                  <Popup>Esta é a localização do {log.name}</Popup>
                </Marker>
              </MapContainer>
            ) : (
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ ml: 5, mt: 2, mb: 1, fontWeight: 'light' }}>Sem Localização</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
