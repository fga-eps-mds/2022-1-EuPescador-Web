import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '~components/Table'
import { useEffect, useState } from 'react'
import { GetAllLogs, FishLogI } from '~services/api/fishLogServices/getAllLogs'
import { useNavigate } from 'react-router-dom'
import { deleteFishLogs } from '~services/api/adminServices/deleteFishLog'

import '~assets/styles/Logs.css'
import { columns } from './tableColumns'

export default function FishLogs() {
  const navigate = useNavigate()

  const [logs, setLogs] = useState<FishLogI[]>([])

  const [open, setOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const [idToDelete, setIdToDelete] = useState(-1)
  const [logNameToDelete, setLogNameToDelete] = useState('')

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
      const reps = await GetAllLogs(user.token, '')
      reps.forEach((element) => {
        if (element.reviewed) {
          element.reviewed = element.reviewed ? 'Revisado' : 'Pendente'
        } else {
          element.reviewed = 'Pendente'
        }
      })
      setLogs(reps)
    } catch(err) {
      console.error(err)
      setLogs([])
    } finally {
      setIsLoading(false)
    }
  }
  const handleClickOpen = (id: number, name: string) => {
    setIdToDelete(id)
    setLogNameToDelete(name)
    setOpen(true)
  }

  const handleDelete = async () => {
    await deleteFishLogs(idToDelete)
    setOpen(false)
    await fetchData()
  }

  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Logs dos Peixes"></Header>
        {isLoading
          ? (
              <div id="loading-container">
                <CircularProgress />
              </div>
            )
          : (
            <TableComponent
              columns={columns}
              rows={(logs || []).map(fishLog => {
                return {
                  id: String(fishLog.id),
                  name: fishLog.name,
                  largeGroup: fishLog.largeGroup,
                  group: fishLog.group,
                  species: fishLog.species,
                  length: fishLog.length,
                  weight: fishLog.weight
                }
              })}
              onDelete={(fishLog) => handleClickOpen(Number(fishLog.id), String(fishLog.name))}
              onEdit={(row: { id: string }) => navigate(`/logs/${row.id}`)}
            />
        )}

      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title-fishLog"
        aria-describedby="alert-dialog-description-fishLog"
      >
        <DialogTitle id="alert-dialog-title-fishLog">
          {`Deseja excluir o log do peixe ${logNameToDelete}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description-fishLog">
            Clique em confirmar para prosseguir com a exclusão do log do peixe
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
