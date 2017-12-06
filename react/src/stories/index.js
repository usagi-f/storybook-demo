import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../button';

storiesOf('Button', module)
  .add('with text', () => {
    return <Button>Sample Text</Button>;
  })
  .add('color: Orange', () => {
    return <Button color="orange">Orange Button</Button>;
  })
  .add('color: Red', () => {
    return <Button color="red">Red Button</Button>;
  });
