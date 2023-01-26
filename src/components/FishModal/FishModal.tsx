import { MouseEventHandler, useState } from 'react'
import {
  Box,
  Button,
  Typography,
  Modal,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { BiEdit } from 'react-icons/bi'
import DeleteIcon from '@mui/icons-material/Delete'

import { FishWiki } from '../../services/api/interfaces'
import { DeleteWikiFish } from '../../services/api/wikiServices/deleteWikiFish'
import { FishRecord } from '../../components/FishRecord/FishRecord'
import { toast, ToastOptions } from 'react-toastify'

type FishModalProps = {
  onClose?: MouseEventHandler<HTMLSpanElement>
  fish: FishWiki
}

const estiloTabela = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#FEFEFE',
  border: '2px solid #0095D9',
  borderRadius: 4,
  boxShadow: 24,
  paddingLeft: 3,
  paddingTop: 4,
  paddingRight: 3,
  paddingBottom: 3,
}

const Img = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '10%',
})

const closeModal = () => {
  console.log('here')
}

export function FishModal(props: FishModalProps) {
  const [open, setOpen] = useState(false)
  const [modalFish, setModalFish] = useState({} as FishWiki)
  const handleClose = () => setOpen(false)
  const [openDialog, setOpenDialog] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClickOpen = () => {
    setOpenDialog(true)
  }

  const handleOpenFishModal = () => {
    setModalFish(props.fish)
    handleOpen()
  }

  const handleClickClose = () => {
    setOpenDialog(false)
  }

  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  } as ToastOptions

  const handleDelete = async () => {
    await DeleteWikiFish(props.fish.id)
      .then(async () => {
        toast.success('Peixe excluído com sucesso')
        await new Promise((resolve) => setTimeout(resolve, 2000))
        window.location.reload()
      })
      .catch(() => {
        toast.error('Erro ao excluir peixe', toastConfig)
      })
    handleClickClose()
  }

  return (
    <>
      <Box flexWrap="wrap" overflow="hidden" justifyContent="space-between" sx={estiloTabela} id="fishEditModal">
        <Box
          width="40%"
          display="flex"
          flexDirection="column"
          gap={2}
          alignContent="center"
          flexBasis="200px"
          textAlign="center"
        >
          <Button
            onClick={handleOpenFishModal}
            sx={{
              borderRadius: '20px',
              width: '170px',
              fontSize: '0.90rem',
              justifySelf: 'center',
              alignSelf: 'center',
              textTransform: 'capitalize',
              fontWeight: 'bold',
            }}
            variant="contained"
            startIcon={<BiEdit />}
          >
            Editar Espécie
          </Button>
          <Button
            onClick={handleClickOpen}
            sx={{
              borderRadius: '20px',
              width: '170px',
              fontSize: '0.90rem',
              justifySelf: 'center',
              alignSelf: 'center',
              textTransform: 'capitalize',
              fontWeight: 'bold',
            }}
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Excluir Espécie
          </Button>
          <Img
            alt="complex"
            id="fishImage"
            src={props.fish.photo == null ? 'https://imgur.com/ybTpCh6.png' : props.fish.photo}
            style={{ width: '200px', height: '175px' }}
          />

          <Typography
            gutterBottom
            variant="h2"
            component="div"
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              textOverflow: 'ellipsis',
              color: '#028BDE',
              textAlign: 'center',
            }}
          >
            {props.fish.commonName}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              fontSize: '14px',
              fontWeight: '700',
              textOverflow: 'ellipsis',
            }}
          >
            {props.fish.scientificName}
          </Typography>
        </Box>

        <Box
          width="60%"
          style={{
            padding: '2px',
          }}
        >
          <Box
            width="100%"
            style={{
              padding: '3px',
              backgroundColor: '#E3F1FA',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: '8px',
              gap: '20px',
              paddingLeft: '8px',
            }}
          >
            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Grande Grupo</label>
              <p>{props.fish.largeGroup ?? '---'}</p>
            </Box>

            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Grupo</label>
              <p>{props.fish.group ?? '---'}</p>
            </Box>
          </Box>

          <Box
            width="100%"
            style={{
              padding: '3px',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: '8px',
              gap: '20px',
              paddingLeft: '8px',
            }}
          >
            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Família</label>
              <p>{props.fish.family ?? '---'}</p>
            </Box>

            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Alimentação</label>
              <p>{props.fish.food ?? '---'}</p>
            </Box>
          </Box>

          <Box
            width="100%"
            style={{
              padding: '3px',
              backgroundColor: '#E3F1FA',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: '8px',
              gap: '20px',
              paddingLeft: '8px',
            }}
          >
            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Tamanho Máx(cm)</label>
              <p>{props.fish.maxSize ?? '---'}</p>
            </Box>

            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Peso Máx(kg)</label>
              <p>{props.fish.maxWeight ?? '---'}</p>
            </Box>
          </Box>

          <Box
            width="100%"
            style={{
              padding: '3px',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: '8px',
              gap: '20px',
              paddingLeft: '8px',
            }}
          >
            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Habitat</label>
              <p>{props.fish.habitat ?? '---'}</p>
            </Box>

            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Endêmico ?</label>
              <p>{props.fish.isEndemic ? 'Sim' : 'Não' ?? '---'}</p>
            </Box>
          </Box>

          <Box
            width="100%"
            style={{
              padding: '3px',
              backgroundColor: '#E3F1FA',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderRadius: '8px',
              gap: '20px',
              paddingLeft: '8px',
            }}
          >
            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Ameaçado ?</label>
              <p>{props.fish.isThreatened ? 'Sim' : 'Não' ?? '---'}</p>
            </Box>

            <Box width="50%" margin="5px auto">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Faz Piracema ?</label>
              <p>{props.fish.hasSpawningSeason ? 'Sim' : 'Não' ?? '---'}</p>
            </Box>
          </Box>

          <Box
            width="100%"
            style={{
              padding: '3px',
              display: 'flex',
              flexDirection: 'row',
              borderRadius: '8px',
              gap: '20px',
              paddingLeft: '8px',
            }}
          >
            <Box width="50%" margin="0px" paddingTop="5px">
              <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Foi introduzido ?</label>
              <p>{props.fish.wasIntroduced ? 'Sim' : 'Não' ?? '---'}</p>
            </Box>
          </Box>
        </Box>

        <span
          onClick={props.onClose}
          style={{
            color: '#0095D9',
            cursor: 'pointer',
            position: 'absolute',
            left: '95%',
            bottom: '93%',
          }}
        >
          &#10006;
        </span>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <FishRecord fish={modalFish} edit onClose={handleClose} />
        </Box>
      </Modal>
      <Dialog
        open={openDialog}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{`Deseja excluir essa espécie de peixe?`}</DialogTitle>
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
    </>
  )
}
