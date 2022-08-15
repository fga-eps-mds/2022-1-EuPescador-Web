import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from '@mui/material'
import Header from '~components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '~components/Table'
import { GetAllUsers, UserI } from '~services/api/userServices/getAllUsers'
import { useEffect, useState } from 'react'
import { ResI } from '~services/api/interfaces'
import { deleteUser } from '~services/api/adminServices/deleteUser'
import { useNavigate } from 'react-router-dom'

export default function User() {
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

  const [open, setOpen] = useState(false)

  const handleClickOpen = async (id: string) => {
    await deleteUser(id)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              userRole: (user.superAdmin ? 'Super Admin' : (user.admin ? 'Admin' : ' Usuário'))
            }
          })}
          onDelete={(user) => handleClickOpen(user.id)}
          onEdit={(row) => navigate(`/usuarios/${row.id}`)}
        />
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
          <Button onClick={handleClose} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
