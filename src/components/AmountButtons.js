import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function AmountButtons({ amount, increase, decrease }) {
  return (
    <div className='amount-btns'>
      <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
}

export default AmountButtons;
