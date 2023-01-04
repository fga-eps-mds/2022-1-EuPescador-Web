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

import Pagination from '@mui/material/Pagination'

import Header, { UserProps } from '~components/Header'
import Sidebar from '~components/Sidebar'
import TableComponent from '~components/Table'
import { TitlePage } from '~components/TitlePage/TitlePage'
import {
  GetAllUsers,
  UserResponseI,
} from '~services/api/userServices/getAllUsers'
import { deleteUser } from '~services/api/userServices/deleteUser'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '~assets/styles/User.css'

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
      label: 'Tipo de usuário',
      value: 'userRole',
    },
  ]

  const usersPerPage = 8

  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [idToDelete, setIdToDelete] = useState('')

  const handleClose = () => {
    setOpen(false)
  }

  const [users, setUsers] = useState<UserResponseI>()

  const handleClickOpen = (id: string) => {
    setIdToDelete(id)
    setOpen(true)
  }

  const handleClickClose = () => {
    setOpen(false)
    setIdToDelete('')
  }

  const handleDelete = async () => {
    await deleteUser(`${idToDelete}`)
    handleClickClose()
    window.location.reload()
  }

  useEffect(() => {
    const user: UserProps = JSON.parse(
      localStorage.getItem('UserData')
    ) as UserProps
    GetAllUsers(user.token, page, usersPerPage)
      .then((res: UserResponseI) => {
        setUsers(res)
      })
      .catch((e) => console.error(e))
  }, [page])

  const onPageChange = (event, page: number) => {
    setPage(page)
  }

  return (
    <Grid container>
      <Header />
      <Grid item xs={1}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={11}>
        <TitlePage title="Gerência de Usuários" />
        {users && users.data.length ? (
          <>
            <TableComponent
              columns={columns}
              rows={(users.data || []).map((user) => {
                return {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  userRole: user.superAdmin
                    ? 'Super Admin'
                    : user.admin
                    ? 'Admin'
                    : ' Usuário',
                }
              })}
              onDelete={(row: { id: string; name: string }) => {
                handleClickOpen(row.id)
              }}
              onEdit={(row) => navigate(`/usuarios/${row.id}`)}
            />
            <Pagination
              count={users.totalPages}
              page={page}
              onChange={onPageChange}
              style={{ marginTop: '16px' }}
              color="primary"
              size="small"
            />
          </>
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
          <Button onClick={handleClickClose}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
