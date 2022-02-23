import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { AmountButtons } from '.';

function CartItem() {
  return (
    <article className='cart-item'>
      <div className='cartItem-title'>
        <img src='#' alt='#' className='img' />
        <div>
          <h5 className='name'>item name</h5>
          <h5 className='price-small'>$15.00</h5>
        </div>
      </div>
      <AmountButtons />
      <h5 className='subtotal'>$15.00</h5>
      <button className='remove-btn'>
        <FaTrash />
      </button>
    </article>
  );
}

export default CartItem;
