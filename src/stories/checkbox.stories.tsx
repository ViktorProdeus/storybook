import React, {ChangeEvent, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import { action } from '@storybook/addon-actions';


export default {
    title: 'Example/Checkbox',
} as Meta;


export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onInputChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.checked)
    }

    return <label><input type='checkbox' checked={parentValue} onChange={onInputChange}/> Checkbox</label>
};

