import React, { useState } from 'react';
// import swal from 'sweetalert';
import './syles.scss';

const ItemCount = ({ valorStock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);
    const [stock] = useState(valorStock);
    const [disableMinus, setDisableMinus] = useState(true);
    const [disablePlus, setDisablePlus] = useState(false);

    const addItem = () => {
        setQuantity(quantity + 1);
        setDisableMinus(false);
        if (quantity === stock - 1) {
            setDisablePlus(true);
        }
    }

    const removeItem = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setDisablePlus(false);
        } else {
            setDisableMinus(true);
        }
    }

    // const addToCart = () => {
    //     if (quantity <= stock) {
    //         swal("Agregado!", "Se agregaron correctamente los productos", "success");;
    //         setStock(stock - quantity);
    //         setQuantity(1);
    //     } else {
    //         alert("No hay stock disponible para agregar los productos al carrito");
    //         setQuantity(1);
    //     }
    // }

    return (
        <>
            <div className="d-grid gap-2 col-6 mx-auto">
                <div className="d-md-flex justify-content-md-center">
                    <button className="btn btn-primary btn-sm" disabled={disableMinus} onClick={removeItem}>-</button>
                    <span className="itemQuantity">{quantity}</span>
                    <button className="btn btn-danger btn-sm" disabled={disablePlus} onClick={addItem}>+</button>
                </div>
                <button className="btn btn-outline-success" onClick={() => onAdd(quantity)}>Add to cart</button>
            </div>
        </>
    )
}

export default ItemCount;