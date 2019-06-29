import React from 'react';
import { storiesOf } from '@storybook/react';
import {ExampleComponent, Button, AnotherButton} from '../src/';

storiesOf('Button', module)
  .add('Example Component', () => (
    <ExampleComponent text='Modern React component module' />
  ))
  .add('Example Button', () => (
    <Button />
  ))
  .add('Example AnotherButton', () => (
    <AnotherButton />
  ))
