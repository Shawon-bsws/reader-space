import React, { useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotal } from '../slice/cart_slice';

function CartButtons() {
  const { amount, cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
