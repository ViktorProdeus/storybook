import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";

function App() {
    console.log('App rendering');
    let [ratingValue, setRatingValue] = useState<RatingValueType>(3);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, setSwitchOn] = useState<boolean>(true);
    let [switchOnUnControlled, setSwitchOnUnControlled] = useState<boolean>(false);
    let items = [{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Ignat', value: 3}, {
        title: 'Viktor',
        value: 4
    },]
    let onItemClick = (value: any) => alert(`I am user ${value}`);

    return (
        <div className={'wrapper'}>
            <Accordion
                onItemClick={onItemClick}
                titleValue={"-- Menu --"}
                collapsed={accordionCollapsed}
                onClick={setAccordionCollapsed}
                items={items}
            />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UnControlledOnOff onChange={setSwitchOnUnControlled}/> {switchOnUnControlled.toString()}
            <UnControlledAccordion titleValue={'-- UnControlledAccordion --'}/>
            <UnControlledRating onChange={() => setRatingValue}/>
        </div>
    )
}

export default App;
