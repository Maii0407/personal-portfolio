import React from 'react';

import { Intro } from './assets/Intro';
import { AboutMe } from './assets/AboutMe';
import { MyWork } from './assets/MyWork';
import { ContactMe } from './assets/ContactMe';

import { data } from './assets/projectData';

const App = () => {
  const { projectList } = data;

  return (
    <div>
      <Intro/>
      <AboutMe/>
      <MyWork array={ projectList } />
      <ContactMe/>
    </div>
  );
};

export { App };
