import React from 'react';

import picMobile from '/home/akmal-izuddin/Desktop/the-odin-project/personal-portfolio/src/image/intro photo mobile.jpg';

const Intro = () => {
  const mobile = picMobile;

  return (
    <div className='intro'>
      <h1>Akmal <br/> Izuddin</h1>
      <picture>
        <img src={ mobile } alt='Akmal Izuddin' />
      </picture>
    </div>
  );
};

export { Intro };