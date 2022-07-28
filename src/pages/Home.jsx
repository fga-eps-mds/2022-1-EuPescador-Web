import { Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'
import CardGallery from '~components/CardGallery/CardGallery'


const Home = () => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        <Header title="Mapa de Cadastros"></Header>
      </Grid>
      <CardGallery />
    </Grid>
  )
}

export default Home
