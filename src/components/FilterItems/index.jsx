import { Box, Container } from '@mui/material'
import Cards from '../Cards'
// import styles from '../ItemListContainer/itemList.module.css'


const FilterItems = ({ productos , categoria }) => {
    return (
        <div>
            <Container>
                <Box display="grid" gridTemplateColumns="repeat(4, 3fr)" gap={8}>{productos.map((producto, id) => (producto.category == categoria?<Cards key={id} producto={producto} />:null))}</Box>
            </Container>
        </div>
    )
}

export default FilterItems