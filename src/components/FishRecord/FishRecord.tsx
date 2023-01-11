import { Box } from '@mui/material'

const estiloTabela = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: '#FEFEFE',
  border: '2px solid #0095D9',
  borderRadius: 4,
  boxShadow: 24,
  paddingLeft: 3,
  paddingTop: 4,
  paddingRight: 1,
  paddingBottom: 1,
}

const closeModal = () => {
  document.getElementById('fishRecordModal').style.visibility = 'hidden'
  document.getElementById('fishRecordModalBackground').style.visibility =
    'hidden'
}

export function FishRecord() {
  return (
    <Box
      flexWrap="wrap"
      overflow="hidden"
      justifyContent="space-between"
      sx={estiloTabela}
      id="fishRecordModal"
    >
      <span
        onClick={closeModal}
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
  )
}
