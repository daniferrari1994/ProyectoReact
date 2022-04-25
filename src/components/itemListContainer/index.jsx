import React, { useState, useEffect } from 'react';
import ItemList from '../itemList';
import './styles.scss';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      (async ()=> {
        const response = await fetch('/data.json');
        const data = await response.json()
        setProducts(data.products);
      })()
    })
      
    return (
      <>
        <ItemList items={products} />
      </>
    )
}

export default ItemListContainer