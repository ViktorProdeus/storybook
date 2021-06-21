import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import { Story, Meta } from "@storybook/react";
import {RatingPropsType, RatingValueType, UnControlledRating } from './UnControlledRating';

export default {
    title: 'UnControlledRating stories',
    component: UnControlledRating,
} as Meta;

const callback = action('rating changed inside component')

const Template: Story<RatingPropsType> = (args) => <UnControlledRating {...args} onChange={callback}/>;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    defaultValue: 0,
};

export const Rating1 = Template.bind({});
Rating1.args = {
    defaultValue: 1,
};

export const Rating2 = Template.bind({});
Rating2.args = {
    defaultValue: 2,
};

export const Rating3 = Template.bind({});
Rating3.args = {
    defaultValue: 3,
};

export const Rating4 = Template.bind({});
Rating4.args = {
    defaultValue: 4,
};

export const Rating5 = Template.bind({});
Rating5.args = {
    defaultValue: 5,
};