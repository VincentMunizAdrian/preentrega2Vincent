import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Cards = ({ producto }) => {
    return (
        <Card sx={{ maxWidth: 250 }}>
        <CardMedia component="img" alt={producto.title} height="300" image={producto.image}/>
        
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">{producto.title}</Typography>
            <Typography variant="body2" color="text.secondary">{producto.category}</Typography>
            <Typography variant="body2" color="text.secondary">{producto.description}</Typography>
            <Typography variant="body2" color="text.secondary">{producto.price}</Typography>
        </CardContent>
        
        <CardActions>
            <Button size="small">agregar al carrito</Button>
            <Link to={`/products/${producto.id}`}>
            <Button size="small">+ info</Button>
            </Link>
        </CardActions>
        </Card>
    );
};

export default Cards;