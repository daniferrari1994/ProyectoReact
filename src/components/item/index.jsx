import React from 'react';
import ItemCount from '../itemCount';
import './styles.scss';

const Item = ({id, title, stock}) => {
    return (
        <>
        <div className='card' id={id}>
            {/* <img src="..." class="card-img-top" alt="..."/> */}
            <div className='card-body'>
                <h5 className='card-title'>{title}</h5>
                <ItemCount valorStock={stock}/>
            </div>
        </div>
      </>
    )
}

export default Item;