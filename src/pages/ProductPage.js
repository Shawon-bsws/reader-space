import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AmountButtons } from '../components';
import { fetchData, fetchSingleProduct } from '../slice/products_slice';

function ProductPage() {
  const { single_product } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(fetchSingleProduct(params.productId));
  }, [params]);

  const { id, bookName, author, genre, detail, image, price } = single_product;

  return (
    <section className='section section-center page'>
      <Link to={'/Products'} className='btn'>
        back to products
      </Link>
      <section className='product-center'>
        <div>
          <img src={image} alt={bookName} />
        </div>
        <section className='content'>
          <h2>{bookName}</h2>
          <h4 className='price'>${price}</h4>
          <p className='desc'>{detail}</p>
          <p className='info'>
            <span>Author : </span>
            {author}
          </p>
          <p className='info'>
            <span>Genre : </span>
            {genre}
          </p>
          <hr />
          <section className='quantity'>
            <div className='btn-container'>
              <AmountButtons />
              <Link to='/cart' className='btn'>
                add to cart
              </Link>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default ProductPage;
