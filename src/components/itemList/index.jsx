import React from 'react';
import ItemCard from '../ItemCard';
import './styles.scss';

const ItemList = ({ items }) => {
    return (
        <div className='itemListMainContainer'>
            {items.map(product => {
                return <ItemCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} stock={product.stock} category={product.category} />
            })}
        </div>
    )
}

export default ItemList;