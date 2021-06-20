import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Rating, RatingPropsType, RatingValueType} from './Rating';
import { Story, Meta } from "@storybook/react";

export default {
    title: 'Rating stories',
    component: Rating,
} as Meta;

const Template: Story<RatingPropsType> = (args) => <Rating {...args} onClick={action('show stars')} />;

export const EmptyRating = Template.bind({});
EmptyRating.args = {
    value: 0,
};

export const Rating1 = Template.bind({});
Rating1.args = {
    value: 1,
};

export const Rating2 = Template.bind({});
Rating2.args = {
    value: 2,
};

export const Rating3 = Template.bind({});
Rating3.args = {
    value: 3,
};

export const Rating4 = Template.bind({});
Rating4.args = {
    value: 4
};

export const Rating5 = Template.bind({});
Rating5.args = {
    value: 5,
};

export const ChangeRating = () => {
    const[rating, setRating] = useState<RatingValueType>(2)
    return <Rating value={rating} onClick={setRating} />
};