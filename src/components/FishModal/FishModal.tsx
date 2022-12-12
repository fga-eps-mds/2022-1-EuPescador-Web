import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { BiEdit } from 'react-icons/bi'

import { FishWiki } from '../../services/api/interfaces'

type FishModalProps = {
  fish: FishWiki
}

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
  paddingBottom: 1
}

const Img = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '10%'
})


export function FishModal(props: FishModalProps) {
  return (
    <Box
      flexWrap='wrap'
      overflow='hidden'
      justifyContent='space-between'
      sx={estiloTabela}
    >

      <Box
        width='40%'
        display='flex'
        flexDirection='column'
        gap={2}
        alignContent='center'
        flexBasis='200px'
        textAlign='center'
      >
        <Button
          sx={{
            borderRadius: '20px',
            width: '170px',
            fontSize: '0.90rem',
            justifySelf: 'center',
            alignSelf: 'center',
            textTransform: 'capitalize',
            fontWeight: 'bold'
          }}
          variant="contained"
          startIcon={<BiEdit />}
        >
          Editar Espécie
        </Button>

        <Img alt="complex" id="fishImage" src={props.fish.photo == null ? 'https://source.unsplash.com/qsHDqcJzHOA' : props.fish.photo} style={{ width: '200px', height: '175px' }} />

        <Typography
          gutterBottom
          variant="h2"
          component="div"
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textOverflow: 'ellipsis',
            color: '#028BDE',
            textAlign: 'center'
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
        width='60%'
        style={{
          padding: '2px'
        }}
      >

        <Box
          width='100%'
          style={{
            padding: '3px',
            backgroundColor: '#E3F1FA',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: '8px',
            gap: '20px',
            paddingLeft: '8px'
          }}
        >

          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Grande Grupo</label>
            <p>{props.fish.largeGroup ?? '---'}</p>
          </Box>


          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Grupo</label>
            <p>{props.fish.group ?? '---'}</p>
          </Box>
        </Box>

        <Box
          width='100%'
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

          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Família</label>
            <p>{props.fish.family ?? '---'}</p>
          </Box>

          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Alimentação</label>
            <p>{props.fish.food ?? '---'}</p>
          </Box>
        </Box>

        <Box
          width='100%'
          style={{
            padding: '3px',
            backgroundColor: '#E3F1FA',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: '8px',
            gap: '20px',
            paddingLeft: '8px'
          }}
        >

          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Tamanho Máx(cm)</label>
            <p>{props.fish.maxSize ?? '---'}</p>
          </Box>


          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Peso Máx(kg)</label>
            <p>{props.fish.maxWeight ?? '---'}</p>
          </Box>
        </Box>

        <Box
          width='100%'
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

          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Habitat</label>
            <p>{props.fish.habitat ?? '---'}</p>
          </Box>

          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Endêmico ?</label>
            <p>{props.fish.isEndemic ? 'Sim' : 'Não' ?? '---'}</p>
          </Box>
        </Box>

        <Box
          width='100%'
          style={{
            padding: '3px',
            backgroundColor: '#E3F1FA',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderRadius: '8px',
            gap: '20px',
            paddingLeft: '8px'
          }}
        >

          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Ameaçado ?</label>
            <p>{props.fish.isThreatened ? 'Sim' : 'Não' ?? '---'}</p>
          </Box>


          <Box
            width='50%'
            margin='5px auto'
          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Faz Piracema ?</label>
            <p>{props.fish.hasSpawningSeason ? 'Sim' : 'Não' ?? '---'}</p>
          </Box>
        </Box>

        <Box
          width='100%'
          style={{
            padding: '3px',
            display: 'flex',
            flexDirection: 'row',
            borderRadius: '8px',
            gap: '20px',
            paddingLeft: '8px',
          }}
        >

          <Box
            width='50%'
            margin='0px'
            paddingTop='5px'

          >
            <label style={{ color: '#028BDE', fontWeight: 'bold' }}>Foi introduzido ?</label>
            <p>{props.fish.wasIntroduced ? 'Sim' : 'Não' ?? '---'}</p>
          </Box>

        </Box>

      </Box>

      < span style={{
        color: '#0095D9',
        cursor: 'pointer',
        position: 'absolute',
        left: '95%',
        bottom: '93%'
      }} >&#10006;</span >
    </Box >
  )
}
