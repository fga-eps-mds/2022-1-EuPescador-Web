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
            <Box sx={{ m: 2 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}> */}
                    {peixes.map((fish, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <FishCard fish={fish} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>

    )
}