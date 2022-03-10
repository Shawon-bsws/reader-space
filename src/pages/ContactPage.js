import React from 'react';

function ContactPage() {
  return (
    <div className='section section-center page empty'>
      <section>
        <h3>thank you for visiting my demo project</h3>
        <article className='section'>
          <p style={{ margin: 'auto' }}>
            Feel free to look around as it's my novice attempt to build an
            E-Commerce website using React.
          </p>
          <section className='about-grid'>
            <p>
              <span>Email: </span>shawon.bsws@gmail.com
            </p>
            <p>
              <a href='https://www.w3schools.com/react/react_css.asp'>
                Source Code : reader space
              </a>
            </p>
          </section>
        </article>
      </section>
    </div>
  );
}

export default ContactPage;
