import React from 'react';

function CartHeader() {
  return (
    <div>
      <div class='cart-header'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr class='cart-hr' />
    </div>
  );
}

export default CartHeader;
