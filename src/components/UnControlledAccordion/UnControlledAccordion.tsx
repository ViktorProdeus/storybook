import React, {useState} from "react";


function UnControlledAccordion() {
    console.log('Accordion rendering');
    let [collapsed, setCollapsed] = useState(true);


    return (
        <div>
            <AccordionTitle onClick={() => setCollapsed(!collapsed)}/>

            {!collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return (
        <h3 onClick={props.onClick}>-- UnControlledMenu --</h3>
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

export default UnControlledAccordion;
