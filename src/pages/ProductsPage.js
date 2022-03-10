import React from 'react';
import { Product } from '../components';
import { useSelector } from 'react-redux';

function ProductsPage() {
  const { productsList } = useSelector((state) => state.products);

  return (
    <section className='section-center'>
      <section className='products-container'>
        {productsList.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </section>
    </section>
  );
}

export default ProductsPage;
