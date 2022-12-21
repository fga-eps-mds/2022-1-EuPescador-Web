import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '~components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAllFishLogs } from '~services/api/fishLogServices/GetAllFishLogs'
import { deleteFishLog } from '~services/api/fishLogServices/deleteFishLog'
import { DownloadExcel } from "react-excel-export"

import { columns } from './tableColumns'

export default function FishLogs() {
  const [logs, setLogs] = useState([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const [idToDelete, setIdToDelete] = useState(-1)
  const [logNameToDelete, setLogNameToDelete] = useState('')

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  const fetchData = async () => {
    try {
      const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
      const reps = await GetAllFishLogs(user.token, '')
      reps.forEach((element) => {
        if (element.reviewed) {
          element.reviewed = element.reviewed ? 'Revisado' : 'Pendente'
        } else {
          element.reviewed = 'Pendente'
        }

        element.latitude = element.coordenates.latitude || " "
        element.longitude = element.coordenates.longitude || " "

        delete element.reviewedBy
        delete element.family
        delete element.visible
        delete element.createdAt
        delete element.createdBy
        delete element.updatedAt
        delete element.updatedBy
        delete element.deletedAt
        delete element.deletedBy
        delete element.coordenates
        delete element.photo
      })
      setLogs(reps)
    } catch(err) {
      console.error(err)
      setLogs([])
    }
  }
  const handleClickOpen = (id: number, name: string) => {
    setIdToDelete(id)
    setLogNameToDelete(name)
    setOpen(true)
  }

  const handleClickClose = () => {
    setOpen(false)
    setLogNameToDelete('')
    setIdToDelete(-1)
  }

  const handleDelete = async () => {
    await deleteFishLog(`${idToDelete}`)
    handleClickClose()
    setLogs([])
    await fetchData()
  }

  return (
    <Grid container>
      <Header />
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        Logs dos Peixes

        {logs.length ? (
          <>
            <button id="excel-logs-button">
              <DownloadExcel
                data={logs}
                buttonLabel="Clique aqui para exportar logs"
                fileName="fish-logs"
                className="button"
              />
            </button>
            <TableComponent
              columns={columns}
              rows={logs || []}
              onDelete={
                (row: { id: string, name: string }) => handleClickOpen(parseInt(`${row.id}`), row.name)
              }
              onEdit={(row: { id: string }) => navigate(`/logs/${row.id}`)}
            />
          </>
        ) : (
          <CircularProgress />
        )}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {`Deseja excluir o registro do peixe ${logNameToDelete}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Clique em confirmar para prosseguir com a exclusão do registro
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
