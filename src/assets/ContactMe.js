import React from 'react';

import picMobile from './image/contactMeMobile.jpg';
import picDesktop from './image/contactMe.jpg'

const ContactMe = ( props ) => {
  const { github, linkedIn, twitter } = props;

  return (
    <div className='contactMe'>
      <div className='textContainer'>
        <h1>Get In Touch</h1>
        <p>
          Please get in touch if you think our work could be mutually beneficial!
        </p>
        <p>izuddin0407@gmail.com</p>
        <div className='iconContainer'>
          <img src={ github } alt='github icon'/>
          <img src={ linkedIn } alt='linkedIn icon'/>
          <img src={ twitter } alt='twitter icon'/>
        </div>
      </div>
      <picture>
        <source srcSet={ picDesktop } media='( min-width: 1200px )'/>
        <img src={ picMobile } alt='Akmal holding a phone'/>
      </picture>
    </div>
  );
};

export { ContactMe };