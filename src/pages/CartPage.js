import React from 'react';
import { Link } from 'react-router-dom';
import { CartHeader, CartItem, CartTotal } from '../components';

function CartPage() {
  return (
    <section className='section section-center page'>
      <CartHeader />
      <CartItem />
      <hr />
      <div className='cartLink-container'>
        <Link to='/Products' className='link-btn'>
          continue shopping
        </Link>
        <button type='button' className='link-btn clear-btn'>
          clear shopping cart
        </button>
      </div>
      <CartTotal />
    </section>
  );
}

export default CartPage;
