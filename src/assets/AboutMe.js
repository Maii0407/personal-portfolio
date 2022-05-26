import React from 'react';

const AboutMe = ( props ) => {
  const { github, linkedIn, twitter } = props;

  return (
    <div className='aboutMe' >
      <h1>About Me</h1>
      <div className='content'>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis.
           Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
           himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis 
           erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat,
           et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna 
           tempus, sed et lorem adipiscing.
        </p>
        <div className='iconContainer'>
          <img src={ github } alt='github icon'/>
          <img src={ linkedIn } alt='linkedIn icon'/>
          <img src={ twitter } alt='twitter icon'/>
        </div>
      </div>
    </div>
  );
};

export { AboutMe };