import React from 'react'
import styles from './cartWidget.module.css'

function CartWidget() {
    return (
        <div className={styles.divCarrito}>
            <i className='bi bi-cart4 styles.iconoCarrito'></i>
            <p className={styles.cantidadCarrito}>7</p>
        </div>
    )
}

export default CartWidget