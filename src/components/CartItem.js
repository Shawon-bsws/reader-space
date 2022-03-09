import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { AmountButtons } from '.';
import { DECREMENT, INCREMENT } from '../actions';
import { toggleAmount, remove } from '../slice/cart_slice';

function CartItem({ id, image, bookName, price, amount }) {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(toggleAmount({ type: INCREMENT, id }));
  };

  const decrease = () => {
    dispatch(toggleAmount({ type: DECREMENT, id }));
  };

  return (
    <article className='cart-item'>
      <div className='cartItem-title'>
        <img src={image} alt={bookName} className='img' />
        <div>
          <h5 className='name'>{bookName}</h5>
          <h5 className='price-small'>${price}</h5>
        </div>
      </div>
      <h5 className='price'>${price}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className='subtotal'>${price * amount}</h5>
      <button className='remove-btn' onClick={() => dispatch(remove(id))}>
        <FaTrash />
      </button>
    </article>
  );
}

export default CartItem;
