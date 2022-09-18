/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */


import { Grid, CircularProgress, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '~components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GetAllFishLogs from '~services/api/fishLogServices/GetAllFishLogs'
import { deleteFishLog } from '~services/api/fishLogServices/deleteFishLog'

export default function FishLogs() {
  const [logs, setLogs] = useState([])
  const [exclude, setexclude] = useState(-1)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const handleClose = () => {
    setOpen(false)
    setexclude(-1)
  }
  
  const handeDelete = () => {
    deleteFishLog(`${exclude}`)
    setexclude(-1)
    setLogs([])
    fetchData().catch(console.error)
    setOpen(false)
  }

  const handleOpen = (id) => {
    setexclude(id)
    setOpen(true)
  }

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

  useEffect(() => {
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
        {logs.length ? (
          <TableComponent
            columns={columns}
            rows={logs || []}
            onDelete={(row: { id: string }) => handleOpen(parseInt(`${row.id}`))}
            onEdit={(row: { id: string }) => navigate(`/logs/${row.id}`)}
          />
        ) : (
          <CircularProgress />

        )}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Deseja excluir o registro?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Clique em confirmar para prosseguir com a exclusão do registro
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handeDelete} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
