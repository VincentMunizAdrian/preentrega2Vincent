import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const url_Api = "https://fakestoreapi.com/products/"

const CardDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    const getProducto = async () => {
        try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProducto(data);
        setLoading(false);
    } catch (error) {
        console.log(error)
        setProducto(null);
        }
    };
    
    useEffect(() => {
        getProducto();
    }, [{id}]);
    
    if (!producto) {
        return <Navigate to="/404" />;
    }
    
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={producto.title} height="500" image={producto.image}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {producto.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $ {producto.price}
                    </Typography>
                </CardContent>
                
            <CardActions>
                <Button size="small">Agregar al carrito</Button>
            </CardActions>
        </Card>

    );
};

export default CardDetail;