import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";


export type AccordionPropsType = {
    titleValue: string
}

function UnControlledAccordion(props: AccordionPropsType) {
    console.log('UnControlledAccordion rendering');
    // let [collapsed, setCollapsed] = useState(false);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});


    return (
        <div>
            {/*<AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>

            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type TitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: TitlePropsType) {
    console.log('UnControlledAccordionTitle rendering');
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    );
}

function AccordionBody() {
    console.log('UnControlledAccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export {UnControlledAccordion};
