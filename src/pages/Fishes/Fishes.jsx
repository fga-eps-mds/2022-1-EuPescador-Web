import { Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../../components/Sidebar'

const Fishes = () => {
  return (
    <Grid container>
      <Header />
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        Criar Registro
      </Grid>
    </Grid>
  )
}
export default Fishes
