/* eslint-disable @typescript-eslint/no-unsafe-argument */
// Externs and Interns libs
import React, { useState, useEffect } from 'react'
import { Grid, Box, Modal } from '@mui/material'

// Components
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { FishCard } from '../../components/FishCard/FishCard'
import { FishModal } from '../../components/FishModal/FishModal'

// Services
import { GetWikiFishes } from '../../services/api/wikiServices/getWikiFishes'
import { FishWiki } from '../../services/api/interfaces'

const Datas = () => {
  const [open, setOpen] = useState(false)
  const [fishes, setFishes] = useState([] as FishWiki[])
  const [modalFish, setModalFish] = useState({} as FishWiki)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    GetWikiFishes()
      .then((res: FishWiki[]) => setFishes(res))
      .catch((e) => console.log(e))
  }, [])

  const handleOpenFishModal = (res: FishWiki) => {
    setModalFish(res)

    handleOpen()
  }

  return (
    <>
      <Grid container>
        <Grid item xs={1}>
          <Sidebar children={undefined} />
        </Grid>
        <Grid item xs={11}>
          <Header title="Listagem de Peixes"></Header>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {(fishes || [])?.map((res: FishWiki, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                  <Box
                    onClick={() => { handleOpenFishModal(res) }}
                  >
                    <FishCard
                      fish={{
                        name: res.commonName,
                        size: res.maxSize,
                        weigth: res.maxWeight,
                        place: res.habitat,
                        imageUrl: res.photo == null ? 'https://source.unsplash.com/qsHDqcJzHOA' : res.photo,
                      }}
                    ></FishCard>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FishModal
          fish={modalFish}
        ></FishModal>
      </Modal>
    </>
  )
}
export default Datas
