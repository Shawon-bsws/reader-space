import React from 'react';
import { IoSearchCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Product() {
  return (
    <article className='product'>
      <div className='product-img'>
        <img src='#' alt='#' className='img photo' />
        <Link to={'/product/:id'} className='link'>
          <IoSearchCircle />
        </Link>
      </div>
      <div className='product-info'>
        <header>
          <h3>item title</h3>
        </header>
        <h5 className='text-small'>Author</h5>
        <h4 className='price'>$15</h4>
      </div>
    </article>
  );
}

export default Product;
