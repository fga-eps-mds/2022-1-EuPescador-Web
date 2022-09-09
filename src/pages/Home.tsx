import { CircularProgress, Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import useLogs from 'hooks/useLogs'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Home = () => {
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

  const filteredLogs = logs.filter((log) => log.coordenates.latitude && log.coordenates.longitude)

  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={null} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Mapa"></Header>

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
            {filteredLogs.map((log) => (
              <Marker position={[log.coordenates.latitude, log.coordenates.longitude]}>
                <Popup>
                  Esta é a localização do {log.name} com peso {log.weight}Kg e tamanho {log.length}
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
