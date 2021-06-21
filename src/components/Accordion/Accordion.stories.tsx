import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Story, Meta} from "@storybook/react";
import Accordion, {AccordionPropsType} from "./Accordion";
const getCategoryObj = (categoryName: 'Color'| 'Event' | 'Main') => ({
    table: {
        category: categoryName
    }
})
export default {
    title: 'Accordion stories',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color',
            ...getCategoryObj('Color')
        },

        onClick: {
            ...getCategoryObj('Event')
        },
        titleValue: {...getCategoryObj('Main')},
        collapsed: {...getCategoryObj('Main')},
    }
} as Meta;

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}  />;
const callback = action('Accordion change event fired');

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: '-- Menu --',
    collapsed: true,
    onClick: callback
};

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    titleValue: '-- Users --',
    collapsed: false,
    onClick: callback
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onClick={() => setValue(!value)}/>
};
ModeChanging.args = {
    titleValue: '-- Users --',
};


