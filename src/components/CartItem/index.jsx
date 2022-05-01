import React from 'react';

const CartItem = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt="Producto" width={'100px'} />
            <button className='btn btn-sm btn-danger'>X</button>
            <p>Cantidad: {product.quantity}</p>
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>Total: ${product.price*product.quantity}</p>
        </div>
    )
}
 
export default CartItem;