import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AmountButtons } from '../components';
import { addToCart } from '../slice/cart_slice';

const AddToCart = ({ product }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      return tempAmount;
    });
  };

  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount;
      if (oldAmount > 1) {
        tempAmount = oldAmount - 1;
      } else {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <section className='quantity'>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to='/cart'
          className='btn'
          onClick={() => dispatch(addToCart({ product, amount }))}
        >
          add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
