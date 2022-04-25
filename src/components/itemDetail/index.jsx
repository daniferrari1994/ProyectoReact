import React from 'react'

const ItemDetail = ({personaje}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '90%',
            height: '90%',
        }}>
            <div>
                <h2>Name: {personaje.name}</h2>
            </div>
        </div>
    )
}

export default ItemDetail