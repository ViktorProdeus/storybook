import React, {ChangeEvent, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import { action } from '@storybook/addon-actions';


export default {
    title: 'Example/Select',
} as Meta;


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1');
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>)=> {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onSelectChange}>
            <option>none</option>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    )
};

