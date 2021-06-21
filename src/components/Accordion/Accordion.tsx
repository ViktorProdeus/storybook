import React from "react";

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (value: boolean) => void
    /** *
     * optional color of title Accordion
      */
    color?: string
}

function Accordion(props: AccordionPropsType) {

    console.log('Accordion rendering');

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                onclick={props.onClick}
                collapsed={!props.collapsed}
                color={props.color}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onclick: (value: boolean) => void
    color?: string

}

function AccordionTitle(props: AccordionTitlePropsType) {

    console.log('AccordionTitle rendering');
    return (
        <h3
            style={{color: props.color ? props.color : 'black'}}
            onClick={() => props.onclick(props.collapsed)}
        >{props.title}</h3>
    );
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;
