import React from 'react';
import { heroMainImg } from '../utils/constants';
function AboutPage() {
  return (
    <section className='section section-center page about-grid'>
      <img src={heroMainImg} alt='bookshelf' className='img' />
      <article className='about'>
        <div className='title'>
          <h2>our story</h2>
          <div className='title-underline' id='about-underline'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            culpa nostrum, ipsa atque saepe nobis! Magni ut, labore deserunt
            amet doloribus, quo expedita autem quibusdam non ipsam voluptas,
            esse eveniet dolore iure illo aliquam corrupti inventore magnam
            minima! Soluta suscipit nisi ut aliquam ipsam vitae, repudiandae
            quasi temporibus vel iure?
          </p>
        </div>
      </article>
    </section>
  );
}

export default AboutPage;
