import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cart } from '../../context/CartProvider';

const CartWidget = () => {
  const { cartQuantity } = useContext(Cart);

  return (
      <Link to={"/cart"}>{cartQuantity}</Link>
  )
}

export default CartWidget;