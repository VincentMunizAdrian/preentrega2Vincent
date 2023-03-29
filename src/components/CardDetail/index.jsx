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
  <div>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} width="200" height="250" />
      <p>{producto.category}</p>
      <p>{producto.description}</p>
      <p>$ {producto.price}</p>
      </div>
  );
};

export default CardDetail;