import React, { useEffect } from 'react';
import { Product } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slice/products_slice';

function ProductsPage() {
  const { productsList } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [productsList]);

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
