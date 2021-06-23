import React, {ChangeEvent, useRef, useState} from 'react';
import {Story, Meta} from '@storybook/react';
import { action } from '@storybook/addon-actions';


export default {
    title: 'Example/Input',
} as Meta;

const Template: Story = (args) => <input {...args}/>;

export const UncontrolledInput = Template.bind({});

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const actualValue = evt.currentTarget.value;
        setValue(actualValue);
    }
    return <><input onChange={onInputChange}/> - {value}</>
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inpurRef = useRef<HTMLInputElement>(null);
    const onSaveClick = ()=> {
        const el = inpurRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <><input ref={inpurRef}/><button onClick={onSaveClick}>save</button> - actual value: {value}</>

};
export const ControlledInputWithFixedValue = Template.bind({});
ControlledInputWithFixedValue.args = {
    value: 'it-incubator'
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onInputChange = (e: ChangeEvent<HTMLInputElement>)=> {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onInputChange}/>
};

