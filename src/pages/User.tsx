import { Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'
import TableComponent from '~components/Table'
import { GetAllUsers, UserI } from '~services/api/userServices/getAllUsers'
import { useEffect, useState } from 'react'
import { ResI } from '~services/api/interfaces'

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

  const [users, setUsers] = useState<UserI[]>()
  useEffect(() => {
    GetAllUsers()
      .then((res: UserI[]) => {
        setUsers(res)
      })
      .catch((e) => console.error(e))
  }, [])

  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Gerência de Usuários"></Header>
        <TableComponent
          columns={columns}
          rows={(users || []).map(user => {
            return {
              name: user.name,
              email: user.email,
              userRole: (user.superAdmin ? 'Super Admin' : (user.admin ? 'Admin' : ' Usuário'))
            }
          })}
          onDelete={(row) => console.log('clicou no delete', row)}
          onEdit={(row) => window.alert(row.name)}
        />
      </Grid>
    </Grid>
  )
}
