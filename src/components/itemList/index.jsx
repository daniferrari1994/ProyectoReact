import React from 'react';
import Item from '../item';
import './styles.scss';

const ItemList = ({ items }) => {
    return (
        <div className='itemListMainContainer'>
            {items.map(product => {
                return <Item key={product.id} title={product.title} price={product.price} pictureUrl={product.pictureUrl} stock={product.stock} />
            })}
        </div>
    )
}

export default ItemList;