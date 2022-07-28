import { Grid } from '@mui/material'
import { FishCard } from '~components/Card/FishCard'


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
        <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            {peixes.map((fish, index) => (
                <Grid item xs={2} sm={2} md={2} key={index}>
                    <FishCard fish={fish} />
                </Grid>
            ))}
        </Grid>


    )
}






