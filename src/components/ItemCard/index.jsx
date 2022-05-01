import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../context/CartProvider';
import swal from 'sweetalert';
import ItemCount from '../ItemCount';

const ItemCard = ({product}) => {
    const [quantity, setQuantity] = useState(0);

    const {addToCart} = useContext(Cart);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        addToCart(product, quantity);
        swal("Agregado", "Se agrego correctamente al carrito!", "success");
    }

    return (
        <div className='card' style={{width: '18rem',}} id={product.id}>
            <img src={product.image} alt="Producto" className='card-img-top'/>
            <div className='card-body'>
                <h5 className='card-title'><Link to={`/item/${product.id}`}>{product.name}</Link></h5>
                <span className='card-text'>${product.price}</span>
                <ItemCount onAdd={onAdd} valorStock={product.stock} />
            </div>
        </div>
    )
}

export default ItemCard;