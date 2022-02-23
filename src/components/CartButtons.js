import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CartButtons() {
  return (
    <Link to={'/cart'} className='cart-btn'>
      Cart
      <span className='cart-container'>
        <FaShoppingCart />
        <span className='cart-value'>0</span>
      </span>
    </Link>
  );
}

export default CartButtons;
