import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartHeader, CartItem, CartTotal } from '../components';
import { clearCart } from '../slice/cart_slice';

function CartPage() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className='section section-center page empty'>
        <h2>your cart is empty</h2>
        <Link to='/Products' className='link-btn'>
          fill it
        </Link>
      </div>
    );
  }

  return (
    <section className='section section-center page'>
      <CartHeader />
      {cart.map((product) => {
        return <CartItem key={product.id} {...product} />;
      })}
      <hr />
      <div className='cartLink-container'>
        <Link to='/Products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={() => dispatch(clearCart())}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotal />
    </section>
  );
}

export default CartPage;
