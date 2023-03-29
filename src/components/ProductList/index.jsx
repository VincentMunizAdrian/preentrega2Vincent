import React from 'react'
import { Container } from '@mui/system'
import Cards from '../Cards'
import { Box } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

const url_Api = "https://fakestoreapi.com/products/"

function ProductList() {
    const [productos, setProductos] = useState([])

    const obtenerProductos = async () => {
    try {
        const res = await axios(url_Api)
        setProductos(res.data)
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
    }

    useEffect (() =>{
    obtenerProductos()
    }, []);

    console.log(productos);
    

    return (
        <div><Container maxWidth="lg">
        <Box display="grid" gridTemplateColumns="repeat(4, 3fr)" gap={8}>
        {productos.map(producto =>
        <Cards producto={producto} key={producto.id}/>
            )}
        </Box>
        </Container></div>
    )
}

export default ProductList