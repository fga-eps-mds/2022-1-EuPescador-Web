import { Grid } from '@mui/material'
import CardGallery from '../components/CardGallery/CardGallery'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'


const Datas = () => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        <Header title="Listagem de Peixes"></Header>
        <CardGallery />
      </Grid>
    </Grid>
  )
}
export default Datas
