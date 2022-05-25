import React from 'react';

const ProjectCard = ( props ) => {
  const { cardObj } = props;

  return (
    <div className='projectCard'>
      <img src={ cardObj.projectImg } alt={ cardObj.name }/>
      <h1>{ cardObj.name }</h1>
      <p>{ cardObj.desc }</p>
    </div>
  );
};

export { ProjectCard };