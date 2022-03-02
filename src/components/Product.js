import React from 'react';
import { IoSearchCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Product({ id, image, bookName, price, author }) {
  return (
    <article className='product'>
      <div className='product-img'>
        <img src={image} alt='#' className='img photo' />
        <Link to={`/product/${id}`} className='link'>
          <IoSearchCircle />
        </Link>
      </div>
      <div className='product-info'>
        <header>
          <h3>{bookName}</h3>
        </header>
        <h5 className='text-small'>{author}</h5>
        <h4 className='price'>${price}</h4>
      </div>
    </article>
  );
}

export default Product;
