import React from 'react';

import { Intro } from './assets/Intro';
import { AboutMe } from './assets/AboutMe';
import { MyWork } from './assets/MyWork';
import { ContactMe } from './assets/ContactMe';

import { data } from './assets/projectData';

import github from './assets/image/github-original.svg';
import linkedIn from './assets/image/linkedin-plain.svg';
import twitter from './assets/image/twitter-original.svg';
import openLink from './assets/image/open-in-new.png';

const App = () => {
  const { projectList } = data;

  return (
    <div>
      <Intro/>
      <AboutMe github={ github } linkedIn={ linkedIn } twitter={ twitter }/>
      <MyWork array={ projectList } github={ github } openLink={ openLink }/>
      <ContactMe github={ github } linkedIn={ linkedIn } twitter={ twitter }/>
    </div>
  );
};

export { App };
