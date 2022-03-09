import React from 'react';
import { useSelector } from 'react-redux';

function CartTotal() {
  const { total } = useSelector((state) => state.cart);
  return (
    <section className='order-total'>
      <div>
        <article>
          <h5>
            subtotal :<span>${total}</span>
          </h5>
          <p>
            shipping fee :<span>$5.34</span>
          </p>
          <hr />
          <h4>
            order total :<span>$11,333.29</span>
          </h4>
        </article>
      </div>
    </section>
  );
}

export default CartTotal;
