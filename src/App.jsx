import './App.css'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CardDetail from './components/CardDetail'
import ItemListContainer from './components/ItemListContainer'
import { useEffect, useState } from 'react'
import FilterItems from './components/FilterItems'

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  return (
    <div>
      <Navbar />
        <h1 className='titulo'>Venta de Todo un poquito</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/Home"/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<ItemListContainer productos={productos} />}/>
        <Route path="/products/:id" element={<CardDetail />}/>
        <Route path='/category/men' element={<FilterItems productos={productos} categoria="men's clothing"/>} />
        <Route path='/category/women' element={<FilterItems productos={productos} categoria="women's clothing"/>} />
        <Route path='/category/electronics' element={<FilterItems productos={productos} categoria="electronics"/>} />
        <Route path='/category/jewelery' element={<FilterItems productos={productos} categoria="jewelery"/>} />
        <Route path="/contact" element={
        <div>
          <h2>Pagina en construcción</h2>  
          <p>Disculpe las molestias</p>
        </div>
          }/>
        <Route path="/404" element={<h2>404 Not Found</h2>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  )
}

export default App