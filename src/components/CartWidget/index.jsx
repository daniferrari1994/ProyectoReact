import React, { useContext } from 'react';
import { Cart } from '../../context/CartProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  const { cartQuantity } = useContext(Cart);

  return (
  <span className="badge bg-light text-dark position-relative">
      <FontAwesomeIcon icon={faCartShopping}/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {cartQuantity}
        <span className="visually-hidden"/>
      </span>
  </span>
  )
}

export default CartWidget;