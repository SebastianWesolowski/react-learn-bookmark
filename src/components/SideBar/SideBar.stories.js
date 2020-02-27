import React from 'react';
import {storiesOf} from '@storybook/react';
import SideBar from './SideBar';

storiesOf('SideBar', module).add('Primary', () => {
  return <SideBar />;
});
