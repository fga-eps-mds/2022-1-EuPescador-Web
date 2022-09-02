/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../components/Sidebar'
import TableComponent from '~components/Table'
import { GetAllLogs, FishLogI } from 'services/api/fishLogServices/getAllLogs'
import { useEffect, useState } from 'react'
import { ResI } from '~services/api/interfaces'
import { deleteFishLogs } from '~services/api/adminServices/deleteFishLog'
import { useNavigate } from 'react-router-dom'

export default function FishLogs() {
  const navigate = useNavigate()
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
    }
  ]

  const [open, setOpen] = useState(false)
  const [idToDelete, setIdToDelete] = useState(-1)


  const handleClickOpen = (id: number) => {
    setIdToDelete(id)
    setOpen(true)
  }

  const handleDelete = async () => {
    await deleteFishLogs(idToDelete)
    setOpen(false)
  }

  const [logs, setLogs] = useState([])

  // const [logs, setLogs] = useState<FishLogI[]>()
  // useEffect(() => {
  //   GetAllLogs()
  //     .then((res: FishLogI[]) => {
  //       setLogs(res)
  //     })
  //     .catch((e) => console.error(e))
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
      const reps = await GetAllLogs(user.token, '')
      setLogs(reps)
    }

    fetchData().catch(console.error)
  }, [])

  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Logs dos Peixes"></Header>
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
          onDelete={(fishLog) => handleClickOpen(Number(fishLog.id))}
        />

      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title-fishLog"
        aria-describedby="alert-dialog-description-fishLog"
      >
        <DialogTitle id="alert-dialog-title-fishLog">
          {"Deseja excluir o usuário?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description-fishLog">
            Clique em confirmar para prosseguir com a exclusão do peixe
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
