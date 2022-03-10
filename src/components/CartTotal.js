import React from 'react';
import { useSelector } from 'react-redux';

function CartTotal() {
  const { total, shipping } = useSelector((state) => state.cart);
  return (
    <section className='order-total'>
      <div>
        <article>
          <h5>
            subtotal :<span>${total}</span>
          </h5>
          <p>
            shipping fee :<span>${shipping}</span>
          </p>
          <hr />
          <h4>
            order total :
            <span>${parseFloat((total + shipping).toFixed(2))}</span>
          </h4>
        </article>
      </div>
    </section>
  );
}

export default CartTotal;
