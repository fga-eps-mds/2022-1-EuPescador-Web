/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Grid, Box, TextField, Typography, Button, Alert } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header, { UserProps } from '~components/Header'
import Sidebar from '~components/Sidebar'
import { TitlePage } from '~components/TitlePage/TitlePage'
import { GetOneFishLog } from '~services/api/fishLogServices/getOneFishLog'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import '~assets/styles/DetailsButtons.css'
import { UpdateFishLog } from '~services/api/fishLogServices/updateFishLog'
import { ReviewFishLog } from '~services/api/fishLogServices/reviewFishLog'
import { toast } from 'react-toastify'
import { withStyles } from '@material-ui/core/styles'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

export interface FishLogProps {
  id: number
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

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#0095D9',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0095D9',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0095D9',
        borderWidth: 1,
      },
      '&:hover fieldset': {
        borderColor: '#0095D9',
        borderWidth: 2,
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0095D9',
        borderWidth: 2,
      },
    },
  },
})(TextField)

export default function LogsDetails() {
  const [log, setLog] = useState({} as FishLogProps)
  const { id } = useParams()

  const getLog = async (logId: string) => {
    const user: UserProps = JSON.parse(
      localStorage.getItem('UserData')
    ) as UserProps
    const data = await GetOneFishLog(logId, user.token)
    setLog(data)
  }

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getLog(id)
    }
  }, [id])

  const atualizaLog = async () => {
    const user: UserProps = JSON.parse(
      localStorage.getItem('UserData')
    ) as UserProps
    await UpdateFishLog(
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
      user.token
    )
    toast.success('Log atualizado com sucesso!')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    routeChange()
  }

  const navigate = useNavigate()
  const routeChange = () => {
    const path = '/logs'
    navigate(path)
  }

  const handleReviewLog = async () => {
    try {
      const user: UserProps = JSON.parse(
        localStorage.getItem('UserData')
      ) as UserProps
      await ReviewFishLog(id, log.name, user.token)
      toast.success('Registro aprovado com sucesso!')
      setLog({
        ...log,
        reviewed: true,
      })
    } catch (error) {
      toast.error('Algo deu errado, tente novamente!')
    }
  }

  return (
    <Grid container>
      <Header />
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <TitlePage title="Detalhes do Log" />
        {log && Object.keys(log).length > 0 && (
          <Box sx={{ mt: 5, ml: 5, display: 'flex' }}>
            <Box sx={{ mt: 2, width: '50%' }}>
              <CssTextField
                margin="normal"
                fullWidth
                label="Nome"
                name="name"
                value={log.name}
                onChange={function (e) {
                  setLog({ ...log, name: e.target.value })
                }}
                InputLabelProps={{
                  style: { color: '#0095D9', fontWeight: 'bold' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                    color: 'black',
                    width: '500px',
                  },
                }}
              />
              <CssTextField
                margin="normal"
                fullWidth
                label="Classe"
                name="largeGroup"
                value={log.largeGroup}
                onChange={function (e) {
                  setLog({ ...log, largeGroup: e.target.value })
                }}
                InputLabelProps={{
                  style: { color: '#0095D9', fontWeight: 'bold' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                    color: 'black',
                    width: '500px',
                  },
                }}
              />
              <CssTextField
                margin="normal"
                fullWidth
                label="Ordem"
                name="group"
                value={log.group}
                onChange={function (e) {
                  setLog({ ...log, group: e.target.value })
                }}
                InputLabelProps={{
                  style: { color: '#0095D9', fontWeight: 'bold' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                    color: 'black',
                    width: '500px',
                  },
                }}
              />
              <CssTextField
                margin="normal"
                fullWidth
                label=" Espécie"
                name="species"
                value={log.species}
                onChange={function (e) {
                  setLog({ ...log, species: e.target.value })
                }}
                InputLabelProps={{
                  style: { color: '#0095D9', fontWeight: 'bold' },
                }}
                InputProps={{
                  style: {
                    borderRadius: '25px',
                    color: 'black',
                    width: '500px',
                  },
                }}
              />
              <Box sx={{ display: 'flex', width: '50%', mt: 2 }}>
                <CssTextField
                  label="Massa(g)"
                  value={log.weight}
                  onChange={function (e) {
                    setLog({ ...log, weight: e.target.value })
                  }}
                  sx={{ mr: 4 }}
                  InputLabelProps={{
                    style: { color: '#0095D9', fontWeight: 'bold' },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: '25px',
                      color: 'black',
                    },
                  }}
                />
                <CssTextField
                  label="Tamanho(cm)"
                  name="length"
                  value={log.length}
                  onChange={function (e) {
                    setLog({ ...log, length: e.target.value })
                  }}
                  InputLabelProps={{
                    style: { color: '#0095D9', fontWeight: 'bold' },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: '25px',
                      color: 'black',
                    },
                  }}
                />
              </Box>
              <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                <Typography sx={{ mr: 2 }}>
                  Status: {log.reviewed ? 'Aprovado' : 'Pendente'}
                </Typography>
                {!log.reviewed && (
                  <Button
                    onClick={handleReviewLog}
                    sx={{
                      backgroundColor: '#0095D9',
                      borderRadius: '20px',
                      height: '35px',
                      textTransform: 'capitalize',
                      fontWeight: 'bold',
                      width: '140px',
                      color: 'white',
                    }}
                  >
                    Aprovar
                  </Button>
                )}
              </Box>
              <Box sx={{ display: 'flex', width: '50%', mt: 10, ml: 0 }}>
                <Button
                  onClick={routeChange}
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: '#0095D9',
                    borderRadius: '20px',
                    height: '40px',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    width: '180px',
                    mr: 2,
                  }}
                >
                  <CloseIcon
                    data-testid="close"
                    sx={{ color: 'white' }}
                  />
                  Cancelar
                </Button>
                <Button
                  onClick={atualizaLog}
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: '#0095D9',
                    borderRadius: '20px',
                    height: '40px',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    width: '180px',
                  }}
                >
                  <CheckIcon
                    data-testid="check"
                    sx={{ color: 'white' }}
                  />
                  Salvar
                </Button>
              </Box>
            </Box>
            <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ mb: 1, fontWeight: 'bold', color: '#0095D9' }}>
                Foto
              </Typography>
              {log.photo ? (
                <img
                  src={`data:image/png;base64,${log.photo}`}
                  width={400}
                  height={250}
                  style={{ borderRadius: '20px' }}
                />
              ) : (
                <Alert severity="info">
                  Opa, parece que este registro não possui uma foto.
                </Alert>
              )}

              <Typography
                sx={{ mt: 5, mb: 1, fontWeight: 'bold', color: '#0095D9' }}
              >
                Localização
              </Typography>

              {log.coordenates &&
              log.coordenates.latitude &&
              log.coordenates.longitude ? (
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
                  <Marker
                    position={[
                      log.coordenates.latitude,
                      log.coordenates.longitude,
                    ]}
                  >
                    <Popup>Esta é a localização do {log.name}</Popup>
                  </Marker>
                </MapContainer>
              ) : (
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ ml: 5, mt: 2, mb: 1, fontWeight: 'light' }}>
                    Sem Localização
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  )
}
