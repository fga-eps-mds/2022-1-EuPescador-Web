import { Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'

const Fishes = () => {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        <Header title="Criar registro"></Header>
      </Grid>
    </Grid>
  )
}
export default Fishes
