import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Story, Meta} from "@storybook/react";
import { UnControlledAccordion } from './UnControlledAccordion';

export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion,
} as Meta;

const callback = action('Accordion mode change event fired');

export const ModeChanging = () => {
    return <UnControlledAccordion  titleValue={'-- Users --'}/>
};

