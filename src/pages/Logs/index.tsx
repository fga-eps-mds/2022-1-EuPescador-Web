import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from '@mui/material'
import Header, { UserProps } from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import TableComponent from '../../components/Table'
import { TitlePage } from '../../components/TitlePage/TitlePage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAllFishLogs } from '../../services/api/fishLogServices/GetAllFishLogs'
import { deleteFishLog } from '../../services/api/fishLogServices/deleteFishLog'
import { DownloadExcel } from 'react-excel-export'
import Pagination from '@mui/material/Pagination'

import { columns } from './tableColumns'

export default function FishLogs() {
  const [logs, setLogs] = useState([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const [idToDelete, setIdToDelete] = useState('')
  const [logNameToDelete, setLogNameToDelete] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(10)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = logs.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(logs.length / recordsPerPage)

  useEffect(() => {
    fetchData().catch(console.error)
  }, [])

  const fetchData = async () => {
    try {
      const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
      const reps = await GetAllFishLogs(user && user.token, '')
      reps.forEach((element) => {
        element.visible = element.visible ? 'Sim' : 'Não'

        element.latitude = element.coordenates ? element.coordenates.latitude || ' ' : ''
        element.longitude = element.coordenates ? element.coordenates.longitude || ' ' : ''

        delete element.reviewedBy
        delete element.family
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
    } catch (err) {
      console.error(err)
      setLogs([])
    }
  }
  const handleClickOpen = (id: string, name: string) => {
    setIdToDelete(id)
    setLogNameToDelete(name)
    setOpen(true)
  }

  function onPageChange(event, page: number) {
    setCurrentPage(page)
  }

  const handleClickClose = () => {
    setOpen(false)
    setLogNameToDelete('')
    setIdToDelete('')
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
        <TitlePage title="Logs dos Peixes" />
        {currentRecords.length > 0 ? (
          <>
            <div
              style={{
                backgroundColor: '#0095D9',
                borderRadius: '20px',
                height: '40px',
                textTransform: 'capitalize',
                width: '170px',
                marginBottom: '30px',
              }}
            >
              <DownloadExcel
                data={logs}
                sx={{ color: 'red' }}
                buttonLabel="Clique aqui para exportar logs"
                fileName="fish-logs"
                className="button"
              />
            </div>
            <TableComponent
              columns={columns}
              rows={currentRecords || []}
              onDelete={(row: { id: string; name: string }) => handleClickOpen(row.id, row.name)}
              onEdit={(row: { id: string }) => navigate(`/logs/${row.id}`)}
            />
          </>
        ) : (
          <CircularProgress />
        )}
        {currentRecords.length > 0
          ? currentRecords && (
              <Pagination
                count={nPages}
                page={currentPage}
                onChange={onPageChange}
                style={{ marginTop: '30px', justifyContent: 'center', display: 'flex', marginBottom: '15px' }}
                color="primary"
                size="small"
              />
            )
          : null}
      </Grid>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Deseja excluir o registro do peixe ${logNameToDelete}?`}</DialogTitle>
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
