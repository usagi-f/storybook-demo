import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomButton from '../CustomButton';

storiesOf('CustomButton', module)
  .add('with text', () => {
    return <CustomButton>Sample Text</CustomButton>;
  })
  .add('color: Orange', () => {
    return <CustomButton color="orange">Orange Button</CustomButton>;
  })
  .add('color: Red', () => {
    return <CustomButton color="red">Red Button</CustomButton>;
  });
