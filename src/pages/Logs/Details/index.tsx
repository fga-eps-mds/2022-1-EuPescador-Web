import { Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../../../components/Sidebar'

export default function LogsDetails() {
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Detalhes do log"></Header>
        <div>Hello Logs</div>
      </Grid>
    </Grid>
  )
}
