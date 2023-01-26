/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState, useEffect, MouseEventHandler } from 'react'
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import '../../assets/styles/FishRecord.css'
import { UserProps } from '../../components/Header'
import log from '../../assets/icons/log_simbolo.svg'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { FishWiki } from '../../services/api/interfaces'
import { createWikiFish } from '../../services/api/wikiServices/createWikiFish'
import { UpdateWikiFish } from '../../services/api/wikiServices/updateWikiFish'
import { toast, ToastOptions } from 'react-toastify'

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

type FishModalProps = {
  onClose?: MouseEventHandler<HTMLSpanElement>
  fish?: FishWiki
  edit?: boolean
}

const fishType = {
  commonName: '',
  family: '',
  food: '',
  funFact: '',
  group: '',
  habitat: '',
  hasSpawningSeason: false,
  hasSpawningSeasonInfo: '',
  isEndemic: false,
  isEndemicInfo: '',
  isThreatened: false,
  isThreatenedInfo: '',
  largeGroup: '',
  maxSize: null,
  maxWeight: null,
  photo: null,
  scientificName: '',
  wasIntroduced: false,
}

export function FishRecord(props: FishModalProps) {
  const [fishWiki, setFishWiki] = useState({} as FishWiki)

  const toastConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  } as ToastOptions

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const handleFileRead = async (event: any) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    setFishWiki({ ...fishWiki, photo: base64.toString() })
  }

  async function atualizaPeixe() {
    const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps

    if (props.edit) {
      await UpdateWikiFish(fishWiki, user.token)
        .then(async () => {
          toast.success('Peixe atualizado com sucesso!')
          await new Promise((resolve) => setTimeout(resolve, 2000))
          window.location.reload()
        })
        .catch(() => {
          toast.error('Erro ao atualizar peixe', toastConfig)
        })
    } else {
      await createWikiFish(fishWiki, user.token)
        .then(async () => {
          toast.success('Peixe criado com sucesso!')
          await new Promise((resolve) => setTimeout(resolve, 2000))
          // window.location.reload()
        })
        .catch(() => {
          toast.error('Erro ao criar peixe', toastConfig)
        })
    }
  }

  useEffect(() => {
    if (props.fish) setFishWiki(props.fish)
    else setFishWiki(fishType)
  }, [])

  return (
    <Box flexWrap="wrap" overflow="hidden" justifyContent="space-between" sx={estiloTabela} id="fishRecordModal">
      {Object.keys(fishWiki).length > 0 && (
        <>
          <Box width="35%">
            {fishWiki.photo ? (
              <label htmlFor="file-input">
                <img alt="complex" className="custom-file-image" src={fishWiki.photo} />
                <input
                  id="file-input"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  style={{ display: 'none' }}
                  onChange={handleFileRead}
                />
              </label>
            ) : (
              <label className="custom-file-upload">
                <div className="icon">
                  <AddIcon sx={{ color: '#0095D9', transform: 'scale(1.8)' }} />
                  <img src={log} style={{ width: '40px', height: '45px' }} />
                </div>
                <Typography className="text-color-file-upload">Adicione uma foto</Typography>
                <input
                  id="file-input"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  style={{ display: 'none' }}
                  onChange={handleFileRead}
                />
              </label>
            )}

            <Box className="box-input-fish-record">
              <label className="label-input-fish-record">Nome usual</label>
              <input
                type="text"
                className="input-fish-record"
                value={fishWiki.commonName || ''}
                onChange={function (e) {
                  setFishWiki({ ...fishWiki, commonName: e.target.value })
                }}
              />
            </Box>

            <Box className="box-input-fish-record">
              <label className="label-input-fish-record">Nome cientista</label>
              <input
                type="text"
                className="input-fish-record"
                value={fishWiki.scientificName || ''}
                onChange={function (e) {
                  setFishWiki({ ...fishWiki, scientificName: e.target.value })
                }}
              />
            </Box>

            <Box className="box-input-fish-record">
              <label className="label-input-fish-record">Família</label>
              <input
                type="text"
                className="input-fish-record"
                value={fishWiki.family || ''}
                onChange={function (e) {
                  setFishWiki({ ...fishWiki, family: e.target.value })
                }}
              />
            </Box>
          </Box>
          <Box width="65%">
            <Box width="100%" sx={{ display: 'flex' }}>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Grande Grupo</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.largeGroup || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, largeGroup: e.target.value })
                  }}
                />
              </Box>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Foi introduzido?</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.wasIntroducedInfo || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, wasIntroducedInfo: e.target.value })
                  }}
                />
              </Box>
            </Box>
            <Box width="100%" sx={{ display: 'flex' }}>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Grupo</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.group || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, group: e.target.value })
                  }}
                />
              </Box>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Alimentação</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.food || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, food: e.target.value })
                  }}
                />
              </Box>
            </Box>
            <Box width="100%" sx={{ display: 'flex' }}>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Tamanho Máx(cm)</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.maxSize || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, maxSize: e.target.value })
                  }}
                />
              </Box>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Peso Máx(kg)</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.maxWeight || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, maxWeight: e.target.value })
                  }}
                />
              </Box>
            </Box>
            <Box width="100%" sx={{ display: 'flex' }}>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Habitat</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.habitat || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, habitat: e.target.value })
                  }}
                />
              </Box>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Endêmico?</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.isEndemicInfo || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, isEndemicInfo: e.target.value })
                  }}
                />
              </Box>
            </Box>
            <Box width="100%" sx={{ display: 'flex' }}>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Ameaçado?</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.isThreatenedInfo || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, isThreatenedInfo: e.target.value })
                  }}
                />
              </Box>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Faz piracema?</label>
                <input
                  type="text"
                  className="input-fish-record"
                  value={fishWiki.hasSpawningSeasonInfo || ''}
                  onChange={function (e) {
                    setFishWiki({ ...fishWiki, hasSpawningSeasonInfo: e.target.value })
                  }}
                />
              </Box>
            </Box>
          </Box>
          <span
            onClick={props.onClose}
            style={{
              color: '#0095D9',
              cursor: 'pointer',
              position: 'absolute',
              left: '97%',
              bottom: '93%',
            }}
          >
            &#10006;
          </span>

          <Box sx={{ display: 'flex', width: '100%', mt: 2, justifyContent: 'center', mb: 2 }}>
            <Button
              onClick={props.onClose}
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
              onClick={atualizaPeixe}
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
        </>
      )}
    </Box>
  )
}
