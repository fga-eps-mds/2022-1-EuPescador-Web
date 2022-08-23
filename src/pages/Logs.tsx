import { Grid } from '@mui/material'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../components/Sidebar'
import TableComponent from '~components/Table'
import { useEffect, useState } from 'react'
import GetAllFishLogs from '~services/api/fishLogServices/getAllLogs'

export default function FishLogs() {

  const [logs, setLogs] = useState([])


  useEffect(() => {

    const fetchData = async () => {
      const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
      const reps = await GetAllFishLogs(user.token, "")
      reps.forEach(element => {
        if (element.reviewed) {
          element.reviewed = element.reviewed ? "Revisado" : "Pendente"
        } else {
          element.reviewed = "Pendente"
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

  const rows = [
    {
      id: 1,
      name: 'Piabinha 1',
      largeGroup: 'Cascudos',
      group: 'Cascudos grandes',
      species: 'Hypostomus plecostomus',
      weight: 20,
      lenght: 10,
      reviewed: 'aprovado',
    },
    {
      id: 2,
      name: 'Piabinha 2',
      largeGroup: 'Cascudos',
      group: 'Cascudos grandes',
      species: 'Hypancistrus sp.',
      weight: 32,
      lenght: 30,
      reviewed: 'pendente',
    },
    {
      id: 3,
      name: 'Piabinha 3',
      largeGroup: 'Cascudos',
      group: 'Cascudos grandes',
      species: 'Panaque nigrolineatus',
      weight: 12,
      lenght: 123,
      reviewed: 'pendente',
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
          onDelete={(row) => console.log(row)}
          onEdit={(row) => console.log(row)}
        />
      </Grid>
    </Grid>
  )
}
