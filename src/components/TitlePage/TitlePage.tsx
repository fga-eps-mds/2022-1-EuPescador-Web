import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add'
import { Typography, Button } from '@mui/material'

import one_fish from '../../assets/images/one_fish.png'

interface HeaderProps {
  title: string
  button?: boolean
}

export function TitlePage({ title = 'Titulo', button = false }: HeaderProps) {
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
      <Typography sx={{ pl: 1, fontWeight: 'bold', fontSize: '20px' }}>
        {title}
      </Typography>

      {button && (
        <Button
          variant="contained"
          startIcon={<AddIcon />}
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
    </Box>
  )
}
