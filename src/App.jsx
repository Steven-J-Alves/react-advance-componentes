import React from 'react';
import { Tab } from '@headlessui/react';

import './styles/global.scss';
import './styles/custom.css';
import '../dist/style/tailwind/tailwindBuild.css';

const App = () => {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default App;
