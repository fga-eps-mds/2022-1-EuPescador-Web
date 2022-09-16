import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, CircularProgress } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '~components/Table'
import { GetAllUsers, UserI } from '~services/api/userServices/getAllUsers'
import { useEffect, useState } from 'react'
import { ResI } from '~services/api/interfaces'
import { deleteUser } from '~services/api/userServices/deleteUser'
import { useNavigate } from 'react-router-dom'

export default function User() { 
  const [users, setUsers] = useState<UserI[]>()
  const [exclude, setExclude] = useState(-1)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  
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
//-------------
const handleClose = () => {
  setOpen(false)
  setExclude(-1)
}

const handeDelete = () => {
  deleteUser(`${exclude}`)
  setExclude(-1)
  setUsers([])
  fetchData().catch(console.error)
  setOpen(false)
}

const handleOpen = (id) => {
  setExclude(id)
  setOpen(true)
}

//-----------

  const fetchData = async () => {
    GetAllUsers()
      .then((res: UserI[]) => {
      setUsers(res)
    })
  }

  useEffect(() => {
    fetchData()
    .catch(console.error)
  }, [])

  return (
    <Grid container>
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <Header title="Gerência de Usuários"></Header>
        {users && users.length ? (
          <TableComponent
            columns={columns}
            rows={(users || []).map(user => {
              return {
                id: user.id.toString(),
                name: user.name,
                email: user.email,
                userRole: (user.superAdmin ? 'Super Admin' : (user.admin ? 'Admin' : ' Usuário'))
              }
            })}
            onDelete={(row) => handleOpen(`${row.id}`)}
            onEdit={(row) => navigate(`/usuarios/${row.id}`)}
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
          {"Deseja excluir o usuário?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Clique em confirmar para prosseguir com a exclusão do usuário
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
