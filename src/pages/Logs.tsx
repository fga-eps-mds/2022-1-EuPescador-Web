/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../components/Sidebar'
import TableComponent from '~components/Table'
import { FishLogInterface, GetAllLogs } from 'services/api/fishLogServices/getAllLogs'
import { useEffect, useState } from 'react'
import { deleteFishLogs } from '~services/api/adminServices/deleteFishLog'
import { useNavigate } from 'react-router-dom'

export default function FishLogs() {
  const navigate = useNavigate()
  const columns = [
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

  const handleClickOpen = async (id: string) => {
    await deleteFishLogs(id)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [logs, setLogs] = useState<FishLogInterface[]>()
  useEffect(() => {
    GetAllLogs()
      .then((res: FishLogInterface[]) => {
        setLogs(res)
      })
      .catch((e) => console.error(e))
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
          rows={(logs || []).map(logs => {
            return {
              name: logs.name,
              largeGroup: logs.largeGroup,
              group: logs.group,
              species: logs.species,
              length: logs.length,
              weight: logs.weight
            }
          })}
          onDelete={(row) => console.log(row)}
          onEdit={(row) => console.log(row)}
        />

      <Dialog
        open={open}
        onClose={handleClose}
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
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
      </Grid>
    </Grid>
  )
}
