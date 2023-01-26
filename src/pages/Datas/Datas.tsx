/* eslint-disable @typescript-eslint/no-unsafe-argument */
// Externs and Interns libs
import { useState, useEffect } from 'react'
import { Grid, Box, Modal } from '@mui/material'
import Pagination from '@mui/material/Pagination'

// Components
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { FishCard } from '../../components/FishCard/FishCard'
import { FishModal } from '../../components/FishModal/FishModal'
import { TitlePage } from '../../components/TitlePage/TitlePage'

// Services
import { FishWikiArray, GetAllFishes, FishWiki } from '../../services/api/interfaces'

const Datas = () => {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)
  const [fishes, setFishes] = useState<FishWikiArray>()
  const [modalFish, setModalFish] = useState({} as FishWiki)

  const fishesPerPage = 32

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => setOpen(false)

  useEffect(() => {
    GetAllFishes(page, fishesPerPage)
      .then((res: FishWikiArray) => setFishes(res))
      .catch((e) => console.log(e))
  }, [page])

  function onPageChange(event, page: number) {
    setPage(page)
  }

  function handleOpenFishModal(res: FishWiki) {
    setModalFish(res)

    handleOpen()
  }

  return (
    <>
      <Grid container>
        <Header />
        <Grid item xs={2} md={1}>
          <Sidebar children={undefined} />
        </Grid>
        <Grid item xs={10} md={11}>
          <TitlePage title="Listagem de Peixes" button />

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {fishes &&
              (fishes.allFishWiki || []).map((res: FishWiki, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                    <Box
                      onClick={() => {
                        handleOpenFishModal(res)
                      }}
                    >
                      <FishCard
                        fish={{
                          name: res.commonName,
                          imageUrl: res.photo == null ? 'https://imgur.com/ybTpCh6.png' : res.photo,
                        }}
                      ></FishCard>
                    </Box>
                  </Grid>
                )
              })}
          </Grid>
          {fishes && (
            <Pagination
              count={fishes.totalPages}
              page={page}
              onChange={onPageChange}
              style={{ marginTop: '30px', justifyContent: 'center', display: 'flex', marginBottom: '15px' }}
              color="primary"
              size="small"
            />
          )}
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <FishModal fish={modalFish} onClose={handleClose}></FishModal>
        </Box>
      </Modal>
    </>
  )
}
export default Datas
