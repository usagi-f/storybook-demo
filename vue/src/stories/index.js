/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import CustomButton from '../components/CustomButton.vue';

storiesOf('CustomButton', module)
  .add('with text', () => ({
    components: { CustomButton },
    template: '<CustomButton>Hello Button</CustomButton>',
  }))
  .add('color: Orange', () => ({
    components: { CustomButton },
    template: '<CustomButton color="orange">Orange Button</CustomButton>',
  }))
  .add('color: red', () => ({
    components: { CustomButton },
    template: '<CustomButton color="red">Red Button</CustomButton>',
  }));

/* eslint-enable react/react-in-jsx-scope */
