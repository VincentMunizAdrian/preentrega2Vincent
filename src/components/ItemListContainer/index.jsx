import { Box, Container } from '@mui/material'
import React from 'react'
import Cards from '../Cards'

const ItemListContainer = ({ productos }) => {
  return (
    <div>
      <Container>
        <Box display="grid" gridTemplateColumns="repeat(4, 3fr)" gap={8}>{productos.map((producto) => ( <Cards key={producto.id}producto={producto} />))}</Box>
      </Container>
    </div>
  )
}

export default ItemListContainer