import React, { useContext } from 'react';
// import './styles.scss';
import { Cart } from '../../context/CartProvider';

const CartItem = ({ product }) => {

    const {removeProductFromCart} = useContext(Cart);

    return (
        <div className='cartItem'>
            <img src={product.image} alt="Producto" width={'100px'} />
            <p>Cantidad: {product.quantity}</p>
            <p className='card-title'>{product.name}</p>
            <p>${product.price}</p>
            <p>Total: ${product.price*product.quantity}</p>
            <button className='btn btn-sm btn-danger' onClick={ () => removeProductFromCart(product) }>X</button>
        </div>
    )
}
 
export default CartItem;