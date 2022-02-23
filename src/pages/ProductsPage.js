import React from 'react';
import { Product } from '../components';

function ProductsPage() {
  return (
    <section className='section-center'>
      <section className='products-container'>
        <Product />
      </section>
    </section>
  );
}

export default ProductsPage;
