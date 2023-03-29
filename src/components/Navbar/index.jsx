import styles from "./navbar.module.css"
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const Navbar = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.ulNav}>
                <div className={styles.listaNav}>
                    <Link to="/home" className={styles.estiloListado} ><li>Logo</li></Link>
                    
                    <div className={styles.listaNav}>
                    <Link to="/products" className={styles.estiloListado} ><li>Inicio</li></Link>
                
                    <Link to={`/category/men`} className={styles.estiloListado} ><li>Ropa de Hombre</li></Link>
                    <Link to={`/category/women`} className={styles.estiloListado} ><li>Ropa de Mujer</li></Link>
                    <Link to={`/category/electronics`} className={styles.estiloListado} ><li>Electro</li></Link>
                    <Link to={`/category/jewelery`} className={styles.estiloListado} ><li>Varios</li></Link>
                    </div>
                </div>
                <Link to="/contact" className={styles.estiloListado} ><li>Contacto</li></Link>
                <CartWidget />
            </ul>
        </nav>
    );
};

export default Navbar;