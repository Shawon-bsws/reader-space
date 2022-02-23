import React from 'react';

function CartTotal() {
  return (
    <section className='order-total'>
      <div>
        <article>
          <h5>
            subtotal :<span>$15</span>
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
