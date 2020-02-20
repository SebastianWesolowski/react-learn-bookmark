import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select} from '@storybook/addon-knobs';
import NavMenu from './NavMenu';

storiesOf('NavMenu', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Theme';
    const options = {
      Dark: 'dark',
      Light: 'light',
    };

    const defaultValue = 'dark';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);

    return <NavMenu theme={value} />;
  });
