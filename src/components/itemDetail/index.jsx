import React from 'react';
import './styles.scss';

const ItemDetail = ({product}) => {
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;