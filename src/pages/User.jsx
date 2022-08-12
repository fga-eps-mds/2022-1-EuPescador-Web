import { Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'
import TableComponent from '~components/Table'

export default function User() {
  const columns = [
    {
      label: 'Nome',
      value: 'name',
    },
    {
      label: 'Email',
      value: 'email',
    },
    {
      label: 'Tipo de usuario',
      value: 'userRole',
    },
    {
      label: 'Desde',
      value: 'userSince',
    },
  ]

  const rows = [
    {
      name: 'Fulano de tal',
      email: 'fulano@gmail.com',
      userRole: 'Admin',
      userSince: '20-03-2010',
    },
    {
      name: 'Fulano de tal',
      email: 'fulano@gmail.com',
      userRole: 'Admin',
      userSince: '20-03-2010',
    },
    {
      name: 'Fulano de tal',
      email: 'fulano@gmail.com',
      userRole: 'Admin',
      userSince: '20-03-2010',
    },
  ]
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        <Header title="Gerência de Usuários"></Header>
        <TableComponent
          columns={columns}
          rows={rows}
          onDelete={(row) => console.log(row)}
          onEdit={(row) => console.log(row)}
        />
      </Grid>
    </Grid>
  )
}
