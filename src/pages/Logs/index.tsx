import { Grid } from '@mui/material'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '~components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetAllFishLogs from '~services/api/fishLogServices/GetAllFishLogs'
import { deleteFishLog } from '~services/api/fishLogServices/deleteFishLog'

export default function FishLogs() {
  const [logs, setLogs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
      const reps = await GetAllFishLogs(user.token, '')
      reps.forEach((element) => {
        if (element.reviewed) {
          element.reviewed = element.reviewed ? 'Revisado' : 'Pendente'
        } else {
          element.reviewed = 'Pendente'
        }
      })
      setLogs(reps)
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error)
  }, [])

  const columns = [
    {
      label: 'Id',
      value: 'id',
    },
    {
      label: 'Nome',
      value: 'name',
    },
    {
      label: 'Classe',
      value: 'largeGroup',
    },
    {
      label: 'Ordem',
      value: 'group',
    },
    {
      label: 'Espécie',
      value: 'species',
    },
    {
      label: 'Tamanho',
      value: 'length',
    },
    {
      label: 'Massa',
      value: 'weight',
    },
    {
      label: 'Status',
      value: 'reviewed',
    },
  ]

  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Logs dos Peixes"></Header>
        <TableComponent
          columns={columns}
          rows={logs || []}
          onDelete={(row: { id: string }) => deleteFishLog(row.id)}
          onEdit={(row: { id: string }) => navigate(`/logs/${row.id}`)}
        />
      </Grid>
    </Grid>
  )
}
