import React, { useEffect, useState } from 'react'
import ItemDetail from '../itemDetail'

const ItemDetailContainer = () => {

    const [personaje, setPersonaje] = useState({})

    useEffect(()=> {

        ( async ()=> {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
                console.log(response);
                const data = await response.json();
                console.log(data);
                setPersonaje(data);
            } catch (error) {
                console.log(error);
            }
        })()

    }, [])

    console.log(personaje);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <ItemDetail personaje={personaje}/>
        </div>
    )
}

export default ItemDetailContainer