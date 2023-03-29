import Cards from '../Cards'
// import styles from '../ItemListContainer/itemList.module.css'


const FilterItems = ({ productos , categoria }) => {
    return (
        <div>
            {productos.map((producto, id) => (producto.category == categoria?<Cards key={id} producto={producto} />:null)
            )}
        </div>
    )
}

export default FilterItems