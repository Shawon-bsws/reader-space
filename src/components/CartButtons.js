import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartButtons() {
  const { amount } = useSelector((state) => state.cart);

  return (
    <Link to={'/cart'} className='cart-btn'>
      Cart
      <span className='cart-container'>
        <FaShoppingCart />
        <span className='cart-value'>{amount}</span>
      </span>
    </Link>
  );
}

export default CartButtons;
