import React from 'react';

import picMobile from './image/contactMeMobile.jpg';

const ContactMe = () => {
  const mobile = picMobile;

  return (
    <div className='contactMe'>
      <h1>Contact Me</h1>
      <p>
        Please get in touch if you think our work could be mutually beneficial!
      </p>
      <p>izuddin0407@gmail.com</p>
      <picture>
        <img src={ mobile } alt='Akmal holding a phone'/>
      </picture>
    </div>
  );
};

export { ContactMe };