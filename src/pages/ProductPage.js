import React from 'react';
import { Link } from 'react-router-dom';
import { AmountButtons } from '../components';

function ProductPage() {
  return (
    <section className='section section-center page'>
      <Link to={'/Products'} className='btn'>
        back to products
      </Link>
      <section className='product-center'>
        <div className='product-img'>
          <img src='#' alt='#' />
        </div>
        <section className='content'>
          <h2>item title</h2>
          <h4 className='price'>$15</h4>
          <p className='desc'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
            ratione, assumenda sit quas eaque eos impedit voluptates fugiat
            deleniti odit doloremque dicta porro ut?
          </p>
          <p className='info'>
            <span>Author : </span>author
          </p>
          <p className='info'>
            <span>Genre : </span>genre
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
