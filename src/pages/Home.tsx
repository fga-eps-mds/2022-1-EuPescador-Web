import { CircularProgress, Grid, IconButton } from '@mui/material'
import { Edit } from '@mui/icons-material'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import useLogs from 'hooks/useLogs'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FishLogI } from '~services/api/fishLogServices/GetAllFishLogs'

const Home = () => {
  const navigate = useNavigate()
  const { logs } = useLogs()
  const [position, setPosition] = useState({
    latitude: -11,
    longitude: -48,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
    } else {
      toast.info('Geolocation is not supported by this browser.')
    }
  }, [])

  const filteredLogs = logs.filter((log) => {
    log.coordenates
      ? log.coordenates.latitude && log.coordenates.longitude
      : null
  })

  return (
    <Grid container>
      <Header />
      <Grid item xs={1}>
        <Sidebar children={null} />
      </Grid>
      <Grid item xs={11}>
        Mapa
        {logs.length ? (
          <MapContainer
            center={[position.latitude, position.longitude]}
            zoom={13}
            scrollWheelZoom
            style={{ height: '100%', width: '80%', borderRadius: '20px solid' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredLogs.map((log: FishLogI) => (
              <Marker
                position={[
                  Number(log.coordenates.latitude),
                  Number(log.coordenates.longitude),
                ]}
              >
                <Popup>
                  Localização do {log.name}, pesando {log.weight}g e medindo{' '}
                  {log.length}cm.
                  <IconButton
                    onClick={() => navigate(`/logs/${log.id}`)}
                    color="warning"
                  >
                    <Edit />
                  </IconButton>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </Grid>
  )
}

export default Home
