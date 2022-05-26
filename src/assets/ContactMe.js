import React from 'react';

import picMobile from './image/contactMeMobile.jpg';

const ContactMe = ( props ) => {
  const { github, linkedIn, twitter } = props;
  const mobile = picMobile;

  return (
    <div className='contactMe'>
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
      <picture>
        <img src={ mobile } alt='Akmal holding a phone'/>
      </picture>
    </div>
  );
};

export { ContactMe };