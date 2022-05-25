import React from 'react';

import { Intro } from './components/Intro';
import { AboutMe } from './components/AboutMe';
import { MyWork } from './components/MyWork';

import { data } from './components/projectAssets/projectData';

const App = () => {
  const { projectList } = data;

  return (
    <div>
      <Intro/>
      <AboutMe/>
      <MyWork array={ projectList } />
    </div>
  );
};

export { App };
