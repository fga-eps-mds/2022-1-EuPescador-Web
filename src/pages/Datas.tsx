/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react'
import { Grid } from '@mui/material'
import { useEffect } from 'react'
import Header from '~components/Header'
import Sidebar from '../components/Sidebar'
import { GetWikiFishes } from '~services/api/wikiServices/getWikiFishes'
import { FishCard } from '~components/FishCard/FishCard'
import { FishWiki } from '~services/api/interfaces'

const Datas = () => {
  const [fishes, setFishes] = React.useState()
  React.useEffect(() => {
    GetWikiFishes()
      .then((res: any) => setFishes(res))
      .catch((e) => console.log(e))
  }, [])

  return (
    <Grid container>
      <Grid item xs={2}>
        <Sidebar children={undefined} />
      </Grid>
      <Grid item xs={10}>
        <Header title="Listagem de Peixes"></Header>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {(fishes || [])?.map((res: FishWiki, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                <FishCard
                  fish={{
                    name: res.commonName,
                    size: res.maxSize,
                    weigth: res.maxWeight,
                    place: res.habitat,
                    imageUrl: res.photo == null ? 'https://source.unsplash.com/qsHDqcJzHOA' : res.photo,
                  }}
                ></FishCard>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Datas
