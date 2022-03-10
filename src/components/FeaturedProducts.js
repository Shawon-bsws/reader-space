import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { fetchData, getFeaturedProducts } from '../slice/products_slice';

function FeaturedProducts() {
  const { featured_products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  return (
    <section className='section ftSection'>
      <div className='title'>
        <h2>featured books</h2>
        <div className='title-underline'></div>
      </div>
      <div className='section-center featured'>
        {featured_products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default FeaturedProducts;
