import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../context/CartProvider';
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemDetail = ({ product }) => {
    const [buttonFlag, setButtonFlag] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const {addToCart} = useContext(Cart);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        setButtonFlag(true);
        addToCart(product, quantity);
    }

    return (
        <div className='card mb-3' style={{width: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.image} alt="Producto" className="img-fluid rounded-start"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className='card-text'>{product.productDetails}</p>
                        <p className="card-text"><small className="text-muted">${product.price}</small></p>
                        {(buttonFlag ? <Link to={"/cart"}><button className='btn btn-dark'>Go to cart</button></Link> : <ItemCount onAdd={onAdd} valorStock={product.stock}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;