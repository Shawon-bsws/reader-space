import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='section section-center page empty'>
      <h2>oops something went wrong</h2>
      <Link to='/' className='link-btn'>
        get back
      </Link>
    </div>
  );
}

export default ErrorPage;
