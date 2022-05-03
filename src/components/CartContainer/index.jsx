import React, { useContext, useState, useEffect } from 'react';
import { Cart } from '../../context/CartProvider';
import CartItem from '../CartItem';
import swal from 'sweetalert';
import CheckoutModal from '../CheckoutModal';

const CartContainer = () => {
  const { cart, calculatePurchaseTotal } = useContext(Cart);
  const [total, setTotal] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTotal(calculatePurchaseTotal());
  }, [total, calculatePurchaseTotal])

  const showModal = () => {
    setModal(true);
    swal("Compra realizada", "Muchas gracias por comprar en nuestra tienda!", "success");
  }

  const hideModal = () => {
    setModal(false)
  }

  return (
    <div>
      {cart.map(prod => <CartItem product={prod} key={prod.id} />)}
      <h3 className='card-title'>Total: ${total}</h3>
      {total > 0 ?
        <button onClick={showModal} className='btn btn-dark'>Finalizar Compra</button>
        :
        null}
      {modal && <CheckoutModal hideModal={hideModal} cart={cart} total={total} />}
    </div>
  )
}

export default CartContainer;