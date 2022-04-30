import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemDetail = ({ product }) => {
    const [buttonFlag, setButtonFlag] = useState(false);
    const [setQuantity] = useState(0);

    const onAdd = (quantity) => {
        setQuantity(quantity);
        setButtonFlag(true);
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
                        <p className='card-text'></p>
                        <p className="card-text"><small className="text-muted">${product.price}</small></p>
                        {(buttonFlag ? <button className='btn btn-dark'><Link style={{ textDecoration: 'none' }} to={"/cart"}>Finalizar compra</Link></button> : <ItemCount onAdd={onAdd} valorStock={20} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;