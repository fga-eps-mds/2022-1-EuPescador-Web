import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { BiEdit } from 'react-icons/bi'

import { FishWiki } from '../../services/api/interfaces'

type FishModalProps = {
  fish: FishWiki
}

const style = {
  position: 'absolute',
  display: 'flex',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#FEFEFE',
  border: '2px solid #0095D9',
  borderRadius: '8px',
  boxShadow: 24,
  p: 1
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
      sx={style}
    >

      <Box
        width='60%'
        display='flex'
        flexDirection='column'
      >
        <Button
          sx={{
            borderRadius: '20px',
          }}
          variant="contained"
          startIcon={<BiEdit />}
        >
          Editar Espécie
        </Button>

        <Img alt="complex" src={props.fish.photo == null ? 'https://source.unsplash.com/qsHDqcJzHOA' : props.fish.photo} style={{ width: '140px', height: '110px' }} />

        <Typography
          gutterBottom
          variant="h2"
          component="div"
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            textOverflow: 'ellipsis',
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
        width='40%'
        style={{
          padding: '2px'
        }}
      >
        <Box
          width='100%'
          style={{
            backgroundColor: '#E3F1FA',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row'
          }}
        >
          <Box
            width='50%'
            margin='0 auto'
          >
            <label style={{ color: '#028BDE' }}>peixao</label>
            <p>auau</p>
          </Box>

          <Box
            width='50%'
            margin='0 auto'
          >
            <label style={{ color: '#028BDE' }}>peixao</label>
            <p>auau</p>
          </Box>

        </Box>
      </Box>
    </Box >
  )
}
