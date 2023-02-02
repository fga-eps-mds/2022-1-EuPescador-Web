/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState, useEffect, MouseEventHandler } from 'react'
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import '../../assets/styles/FishRecord.css'
import { styled } from '@mui/material/styles'
import { UserProps } from '../../components/Header'
import log from '../../assets/icons/log_simbolo.svg'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { FishWiki } from '../../services/api/interfaces'
import { createWikiFish } from '../../services/api/wikiServices/createWikiFish'
import { UpdateWikiFish } from '../../services/api/wikiServices/updateWikiFish'
import { toast, ToastOptions } from 'react-toastify'
import Switch from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import groupsJson from './groups.json'
import { AxiosError } from 'axios'

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
  commonName: null,
  family: null,
  food: null,
  funFact: null,
  group: null,
  habitat: null,
  hasSpawningSeason: false,
  hasSpawningSeasonInfo: null,
  isEndemic: false,
  isEndemicInfo: null,
  isThreatened: false,
  isThreatenedInfo: null,
  largeGroup: null,
  maxSize: null,
  maxWeight: null,
  photo: null,
  wasIntroducedInfo: null,
  scientificName: null,
  wasIntroduced: false,
}

export function FishRecord(props: FishModalProps) {
  const [fishWiki, setFishWiki] = useState({} as FishWiki)
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : 'rgba(0, 149, 217, 0.2)',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }))

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
        .catch((error) => {
          const { status } = error.response as AxiosError
          if (Number(status) === 406) toast.error('Erro ao ler a imagem', toastConfig)
          else if (Number(status) === 404) toast.error('Peixe não encontrado', toastConfig)
          else if (Number(status) === 418)
            toast.warning('Os campos nome, grupo e grades grupos são obrigatórios', toastConfig)
          else toast.error('Erro inesperado! Tente novamente mais tarde', toastConfig)
          toast.error('Erro ao atualizar peixe', toastConfig)
        })
    } else {
      await createWikiFish(fishWiki, user.token)
        .then(async () => {
          toast.success('Peixe criado com sucesso!')
          await new Promise((resolve) => setTimeout(resolve, 2000))
          window.location.reload()
        })
        .catch((error) => {
          const { status } = error.response as AxiosError
          if (Number(status) === 418)
            toast.warning('Os campos nome, nome científico, grupo e grande grupos são obrigatórios', toastConfig)
          else if (Number(status) === 406) toast.error('Erro ao ler a imagem', toastConfig)
          else if (Number(status) === 409)
            toast.error('Altere o nome científico com o nome de uma espécie nova', toastConfig)
          else toast.error('Erro inesperado! Tente novamente mais tarde', toastConfig)
        })
    }
  }

  useEffect(() => {
    if (props.fish) setFishWiki(props.fish)
    else setFishWiki(fishType)
  }, [props.fish])

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
              <label className="label-input-fish-record">Nome usual (obrigatório)</label>
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
              <label className="label-input-fish-record">Nome científico</label>
              <input
                type="text"
                id="input-fish-record"
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
                <>
                  <label className="label-input-fish-record">Grande Grupo (obrigatório)</label>
                  <div className="div-select">
                    <select
                      id="selectLargeGroup"
                      value={fishWiki.largeGroup || ''}
                      onChange={function (e) {
                        groupsJson.GrandeGrupo[0][e.target.value] &&
                          setFishWiki({
                            ...fishWiki,
                            largeGroup: e.target.value,
                            group: groupsJson.GrandeGrupo[0][e.target.value].Grupo[0],
                          })
                      }}
                    >
                      {Object.keys(groupsJson.GrandeGrupo[0]).map((value, index) => (
                        <option key={index}>{value}</option>
                      ))}
                    </select>
                  </div>
                </>
              </Box>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Foi introduzido?</label>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: '10px' }}>
                  <Typography>Não</Typography>
                  <AntSwitch
                    checked={fishWiki.wasIntroduced || false}
                    onChange={function () {
                      setFishWiki({ ...fishWiki, wasIntroduced: !fishWiki.wasIntroduced })
                    }}
                    inputProps={{ 'aria-label': 'ant design' }}
                  />
                  <Typography>Sim</Typography>
                </Stack>
              </Box>
            </Box>
            <Box width="100%" sx={{ display: 'flex' }}>
              <Box width="50%" className="box-input-fish-record">
                <>
                  <label className="label-input-fish-record">Grupo (obrigatório)</label>
                  <div className="div-select">
                    <select
                      value={fishWiki.group || ''}
                      onChange={function (e) {
                        setFishWiki({ ...fishWiki, group: e.target.value })
                      }}
                    >
                      {groupsJson.GrandeGrupo[0][fishWiki.largeGroup] ? (
                        groupsJson.GrandeGrupo[0][fishWiki.largeGroup].Grupo.map((value: string, index: number) => (
                          <option key={index}>{value}</option>
                        ))
                      ) : (
                        <option>Sem grupo</option>
                      )}
                    </select>
                  </div>
                </>
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
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: '10px' }}>
                  <Typography>Não</Typography>
                  <AntSwitch
                    checked={fishWiki.isEndemic || false}
                    onChange={function () {
                      setFishWiki({ ...fishWiki, isEndemic: !fishWiki.isEndemic })
                    }}
                    inputProps={{ 'aria-label': 'ant design' }}
                  />
                  <Typography>Sim</Typography>
                </Stack>
              </Box>
            </Box>
            <Box width="100%" sx={{ display: 'flex' }}>
              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Ameaçado?</label>
                <div className="div-select">
                  <select
                    value={fishWiki.isThreatenedInfo || ''}
                    onChange={function (e) {
                      setFishWiki({ ...fishWiki, isThreatenedInfo: e.target.value })
                    }}
                  >
                    <option>Não</option>
                    <option>Sim, categoria Vulnerável</option>
                    <option>Sim, categoria Ameaçado</option>
                    <option>Sim, categoria Criticamente Ameaçado</option>
                  </select>
                </div>
              </Box>

              <Box width="50%" className="box-input-fish-record">
                <label className="label-input-fish-record">Faz piracema?</label>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: '10px' }}>
                  <Typography>Não</Typography>
                  <AntSwitch
                    checked={fishWiki.hasSpawningSeason || false}
                    onChange={function () {
                      setFishWiki({ ...fishWiki, hasSpawningSeason: !fishWiki.hasSpawningSeason })
                    }}
                    inputProps={{ 'aria-label': 'ant design' }}
                  />
                  <Typography>Sim</Typography>
                </Stack>
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
