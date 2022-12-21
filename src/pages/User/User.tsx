import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  CircularProgress,
} from '@mui/material'
import Header, { UserProps } from '~components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '~components/Table'
import { GetAllUsers, UserI } from '~services/api/userServices/getAllUsers'
import { useEffect, useState } from 'react'
import { ResI } from '~services/api/interfaces'
import { deleteUser } from '~services/api/userServices/deleteUser'
import { useNavigate } from 'react-router-dom'
import "../../assets/styles/User.css"

import fishIcon from "../../assets/icons/peixe_simbolo1.svg"

export default function User() {
  const navigate = useNavigate()
  const columns = [
    {
      label: 'Nome',
      value: 'name',
    },
    {
      label: 'E-mail',
      value: 'email',
    },
    {
      label: 'Tipo de usuario',
      value: 'userRole',
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
    const user: UserProps = JSON.parse(
      localStorage.getItem('UserData')
    ) as UserProps
    GetAllUsers(user.token)
      .then((res: UserI[]) => {
        setUsers(res)
      })
      .catch((e) => console.error(e))
  }, [])

  return (
    <Grid container>
      <Header />
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <h2 style={{marginBottom: '20px', display: 'flex', alignItems: 'center'}}>
        <img src={fishIcon} style={{width: "50px", height: "70px", marginRight:'8px'}}/>
        Gerência de Usuários
        </h2>
        {users && users.length ? (
          <TableComponent
            columns={columns}
            rows={(users || []).map((user) => {
              return {
                id: user.id.toString(),
                name: user.name,
                email: user.email,
                userRole: user.superAdmin
                  ? 'Super Admin'
                  : user.admin
                  ? 'Admin'
                  : ' Usuário',
                }
              })}
            onDelete={(user) => console.log(user.id)}
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
          {'Deseja excluir o usuário?'}
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
