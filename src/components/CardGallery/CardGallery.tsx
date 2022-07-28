import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { type } from 'os'
import React from 'react'
import { FishCard } from '~components/Card/FishCard'
import "./styles.css"

export default function CardGallery() {
    const peixes = [
        { name: 'Tilapia azul', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia amarela', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia verde', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia azul', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia amarela', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia verde', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia azul', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia amarela', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia verde', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia azul', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia amarela', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia verde', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia azul', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia amarela', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia verde', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia azul', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia azul', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia amarela', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia verde', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },
        { name: 'Tilapia azul', weigth: '120 KG', size: "122 CM", place: 'Pantanal Brasil', imageUrl: 'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/02/tilapia-e1645622421681.jpg' },

    ]
    return (
        <Box className="limit">
            <Box sx={{ m: -12 }}>
                <Grid container spacing={{ md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                    {peixes.map((fish, index) => (
                        <Grid item xs={1} sm={2} md={3} key={index}>

                            <FishCard fish={fish} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>

    )
}