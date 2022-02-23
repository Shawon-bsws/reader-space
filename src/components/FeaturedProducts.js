import React from 'react';
import Product from './Product';

function FeaturedProducts() {
  return (
    <section className='section ftSection'>
      <div className='title'>
        <h2>featured books</h2>
        <div class='title-underline'></div>
      </div>
      <div className='section-center featured'>
        <Product />
      </div>
    </section>
  );
}

export default FeaturedProducts;
