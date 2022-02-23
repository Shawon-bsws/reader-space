import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function AmmountButtons() {
  return (
    <div className='amount-btns'>
      <button type='button' className='amount-btn'>
        <FaMinus />
      </button>
      <h2 className='amount'>1</h2>
      <button type='button' className='amount-btn'>
        <FaPlus />
      </button>
    </div>
  );
}

export default AmmountButtons;
