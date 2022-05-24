import React from 'react';

import { Intro } from './components/Intro';
import { AboutMe } from './components/AboutMe';
import { MyWork } from './components/MyWork';

const App = () => {
  return (
    <div>
      <Intro/>
      <AboutMe/>
      <MyWork/>
    </div>
  );
};

export { App };
