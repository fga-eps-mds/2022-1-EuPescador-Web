import { useState } from 'react'
import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add'
import { Typography, Button, Modal } from '@mui/material'

import one_fish from '../../assets/images/one_fish.png'
import { FishRecord } from '../../components/FishRecord/FishRecord'

interface HeaderProps {
  title: string
  button?: boolean
}

export function TitlePage({ title = 'Titulo', button = false }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleOpenFishModal = () => {
    handleOpen()
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        mb: '30px',
      }}
    >
      <img src={one_fish} width={35} height={20} />
      <Typography sx={{ pl: 1, fontWeight: 'bold', fontSize: '20px' }}>{title}</Typography>

      {button && (
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            handleOpenFishModal()
          }}
          sx={{
            backgroundColor: '#0095D9',
            borderRadius: '20px',
            fontWeight: 'bold',
            marginLeft: 'auto',
            marginRight: '16px',
          }}
        >
          Cadastrar Espécie
        </Button>
      )}
      <Modal id="fishRecordModalBackground" open={open} onClose={handleClose}>
        <Box>
          <FishRecord onClose={handleClose} />
        </Box>
      </Modal>
    </Box>
  )
}
