import React from 'react';
import { heroMainImg, heroAccentImg } from '../utils/constants';

function Hero() {
  return (
    <section className='section-center intro'>
      <article className='content'>
        <h1>If you don’t like to read, you haven’t found the right book.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet
          animi at repellendus, assumenda consequatur distinctio dignissimos
          laborum quia et.
        </p>
      </article>
      <article className='image-container'>
        <img src={heroMainImg} alt='bookshelf' className='img main-img' />
        <img
          src={heroAccentImg}
          alt='book reading'
          className='img accent-img'
        />
      </article>
    </section>
  );
}

export default Hero;
