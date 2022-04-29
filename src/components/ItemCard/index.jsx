import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount';
import './styles.scss';

const ItemCard = ({id, name, price, image, stock}) => {
    return (
        <div className='card' style={{width: '18rem',}} id={id}>
            <img src={image} alt="Producto" className='card-img-top'/>
            <div className='card-body'>
                <h5 className='card-title'><Link to={`/item/${id}`}>{name}</Link></h5>
                <span className='card-text'>${price}</span>
                <ItemCount valorStock={stock} />
            </div>
        </div>
    )
}

export default ItemCard;