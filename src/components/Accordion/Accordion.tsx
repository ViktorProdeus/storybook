import React from "react";

type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (value: boolean) => void
    /** *
     * optional color of title Accordion
      */
    color?: string
    items: ItemType[]
    onItemClick: (value: boolean) => void
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
            {!props.collapsed && <AccordionBody onItemClick={props.onItemClick} items={props.items}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onItemClick: (value: any)=>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return (
        <ul>
            {props.items.map(i=> <li onClick={()=> props.onItemClick(i.title)} key={i.value}>{i.title}</li>)}
        </ul>
    );
}

export default Accordion;
