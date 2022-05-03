import React, { useState } from 'react';
import { db } from './../../Firebase/config';
import { addDoc, collection } from "firebase/firestore";

const CheckoutModal = ({ hideModal, cart, total }) => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Se hizo el submit");
        console.log(nombre, direccion);
        if (nombre === "" || email === "" || direccion === "" || telefono === ""){
            return
        }
        const order = {
            buyer: {
                nombre: nombre,
                email: email,
                direccion: direccion,
                telefono: telefono
            },
            items: {
                cart
            },
            total: total,
            dateCreated: new Date().toLocaleDateString()
        }
        console.log(order);
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then(({id})=> alert(`Order generada con id ${id}`));
        hideModal();
    }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Finalizar Compra</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={hideModal}/>
                </div>
                <div className="modal-body">
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="col-form-label">Nombre:</label>
                            <input className="form-control" placeholder='Nombre' id="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="col-form-label">Email:</label>
                            <input placeholder='Email' id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="col-form-label">Direccion:</label>
                            <input placeholder='Direccion' id="direccion" value={direccion} onChange={e => setDireccion(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="col-form-label">Telefono:</label>
                            <input placeholder='Telefono' id="telefono" value={telefono} onChange={e => setTelefono(e.target.value)}/>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Confirmar compra</button>
                </div>
            </div>
        </div>
    </div>   
  )
}

export default CheckoutModal
