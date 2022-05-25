import React from 'react';

import { ProjectCard } from './ProjectCard';

const MyWork = ( props ) => {
  const { array } = props;

  return (
    <div className='myWork' >
      <h1>My Work</h1>
      <div className='projectContainer'>{
        array.map((project) => {
          return <ProjectCard key={ project.id } cardObj={ project }/>
        })
      }</div>
    </div>
  );
};

export { MyWork }