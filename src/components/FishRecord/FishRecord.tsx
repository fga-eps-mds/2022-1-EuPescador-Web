import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import '../../assets/styles/FishRecord.css'
import log from '../../assets/icons/log_simbolo.svg'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

const estiloTabela = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
  document.getElementById('fishRecordModalBackground').style.visibility = 'hidden'
}

export function FishRecord() {
  return (
    <Box flexWrap="wrap" overflow="hidden" justifyContent="space-between" sx={estiloTabela} id="fishRecordModal">
      <Box width="35%">
        <label className="custom-file-upload">
          <div className="icon">
            <AddIcon sx={{ color: '#0095D9', transform: 'scale(1.8)' }} />
            <img src={log} style={{ width: '40px', height: '45px' }} />
          </div>
          <Typography className="text-color-file-upload">Adicione uma foto</Typography>
          <input type="file" accept="image/png, image/jpeg, image/jpg" />
        </label>

        <Box className="box-input-fish-record">
          <label className="label-input-fish-record">Nome usual</label>
          <input type="text" className="input-fish-record" />
        </Box>

        <Box className="box-input-fish-record">
          <label className="label-input-fish-record">Nome cientista</label>
          <input type="text" className="input-fish-record" />
        </Box>

        <Box className="box-input-fish-record">
          <label className="label-input-fish-record">Família</label>
          <input type="text" className="input-fish-record" />
        </Box>
      </Box>
      <Box width="65%">
        <Box width="100%" sx={{ display: 'flex' }}>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Grande Grupo</label>
            <input type="text" className="input-fish-record" />
          </Box>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Foi introduzido?</label>
            <input type="text" className="input-fish-record" />
          </Box>
        </Box>
        <Box width="100%" sx={{ display: 'flex' }}>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Grupo</label>
            <input type="text" className="input-fish-record" />
          </Box>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Alimentação</label>
            <input type="text" className="input-fish-record" />
          </Box>
        </Box>
        <Box width="100%" sx={{ display: 'flex' }}>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Tamanho Máx(cm)</label>
            <input type="text" className="input-fish-record" />
          </Box>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Peso Máx(kg)</label>
            <input type="text" className="input-fish-record" />
          </Box>
        </Box>
        <Box width="100%" sx={{ display: 'flex' }}>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Habitat</label>
            <input type="text" className="input-fish-record" />
          </Box>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Endêmico?</label>
            <input type="text" className="input-fish-record" />
          </Box>
        </Box>
        <Box width="100%" sx={{ display: 'flex' }}>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Ameaçado?</label>
            <input type="text" className="input-fish-record" />
          </Box>
          <Box width="50%" className="box-input-fish-record">
            <label className="label-input-fish-record">Faz piracema?</label>
            <input type="text" className="input-fish-record" />
          </Box>
        </Box>
      </Box>
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

      <Box sx={{ display: 'flex', width: '100%', mt: 2, justifyContent: 'center', mb: 2 }}>
        <Button
          // onClick={routeChange}
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: '#0095D9',
            borderRadius: '20px',
            height: '40px',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            width: '180px',
            mr: 2,
          }}
        >
          <CloseIcon data-testid="close" sx={{ color: 'white' }} />
          Cancelar
        </Button>
        <Button
          // onClick={atualizaLog}
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: '#0095D9',
            borderRadius: '20px',
            height: '40px',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            width: '180px',
          }}
        >
          <CheckIcon data-testid="check" sx={{ color: 'white' }} />
          Salvar
        </Button>
      </Box>
    </Box>
  )
}
