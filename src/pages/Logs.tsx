import { Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'
import TableComponent from '~components/Table'
import { useEffect, useState } from 'react'
import {  GetAllFishLogs } from '~services/api/fishLogServices/getAllLogs'
interface UserDataProps {
  token: string;
}

export default function User() {
  
    const [logs, setLogs] = useState([])
      useEffect(() => {
      const userData = localStorage.getItem('UserData')
      const parsedUserData: UserDataProps = JSON.parse(userData) as UserDataProps
           console.log(parsedUserData)
      GetAllFishLogs(parsedUserData.token,"").then(ras => setLogs(ras)).catch(err => console.error(err))
        
    },[])

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
      value: 'lenght',
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
      group:'Cascudos grandes',
      species: 'Hypostomus plecostomus',
      weight: 20,
      lenght: 10,
      reviewed: 'aprovado',
    },
    {
      id: 2,
      name: 'Piabinha 2',
      largeGroup: 'Cascudos',
      group:'Cascudos grandes',
      species: 'Hypancistrus sp.',
      weight: 32,
      lenght: 30,
      reviewed: 'pendente',
    },
    {
      id: 3,
      name: 'Piabinha 3',
      largeGroup: 'Cascudos',
      group:'Cascudos grandes',
      species: 'Panaque nigrolineatus',
      weight: 12,
      lenght: 123,
      reviewed: 'pendente',
    },
  ]
  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children = {undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Logs dos Peixes"></Header>
        <TableComponent
          columns={columns}
          rows={logs}
          onDelete={(row) => console.log(row)}
          onEdit={(row) => console.log(row)}
        />
      </Grid>
    </Grid>
  )
}
