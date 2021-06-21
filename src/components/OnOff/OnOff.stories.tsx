import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {OnOff, OnOffType} from './OnOff';
import {Story, Meta} from "@storybook/react";

export default {
    title: 'OnOff stories',
    component: OnOff,
} as Meta;

const Template: Story<OnOffType> = (args) => <OnOff {...args}  />;
const callback = action('on or off clicked');

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    onChange: callback
};

export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    onChange: callback
};

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue}/>
};

