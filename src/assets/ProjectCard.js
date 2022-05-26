import React from 'react';

const ProjectCard = ( props ) => {
  const { cardObj, github, openLink } = props;

  return (
    <div className='projectCard'>
      <img src={ cardObj.projectImg } alt={ cardObj.name }/>
      <header>
        <h2>{ cardObj.name }</h2>
        <div className='iconContainer'>
          <img src={ github } alt='github icon'/>
          <img src={ openLink } alt='openLink icon'/>
        </div>
      </header>
      <p>{ cardObj.desc }</p>
    </div>
  );
};

export { ProjectCard };