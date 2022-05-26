import React from 'react';

import { ProjectCard } from './ProjectCard';

const MyWork = ( props ) => {
  const { array, github, openLink } = props;

  return (
    <div className='myWork' >
      <h1>My Work</h1>
      <div className='projectContainer'>{
        array.map((project) => {
          return <ProjectCard key={ project.id } cardObj={ project } github={ github }
            openLink={ openLink }
          />
        })
      }</div>
    </div>
  );
};

export { MyWork }