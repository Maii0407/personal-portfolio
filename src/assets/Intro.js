import React from 'react';

import picMobile from './image/introMobile.jpg'
import picDesktop from './image/intro.jpg';

const Intro = () => {
  return (
    <div className='intro'>
      <picture>
        <source srcSet={ picDesktop } media='( min-width: 1000px )'/>
        <img src={ picMobile } alt='Akmal Izuddin' />
      </picture>
    </div>
  );
};

export { Intro };