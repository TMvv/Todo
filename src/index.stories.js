import React from 'react';
import { Button } from '@storybook/react/demo';
import Todo from './components/Todo'
import { storiesOf } from '@storybook/react';

storiesOf('Todo', module)
    .add(
        'fist',
        ()=>{
            <Todo titel={{ text: 'learn React',
            isDone : false
        }} key="1" ></Todo>
        }
    )

