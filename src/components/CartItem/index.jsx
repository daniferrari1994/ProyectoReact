import React, { useContext } from 'react';
// import './styles.scss';
import { Cart } from '../../context/CartProvider';

const CartItem = ({ product }) => {

    const {removeProductFromCart} = useContext(Cart);

    return (
        <div className="card mb-3" style={{width: '23rem'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <button className='btn btn-sm btn-danger' onClick={ () => removeProductFromCart(product)}>X</button>
                    <img src={product.image} className="card-img-top" alt="Producto"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cantidad: {product.quantity}</li>
                            <li className="list-group-item">Precio: ${product.price}</li>
                            <li className="list-group-item">Total: ${product.price*product.quantity}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default CartItem;

