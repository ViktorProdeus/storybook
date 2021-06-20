import React from "react";

type OnOffType = {
    toggle: boolean
    onClick: (value: boolean) => void
}

export const OnOff: React.FC<OnOffType> = (props) => {
    console.log('OnOff rendering');

    const isOnClass = props.toggle ? 'toggle on' : 'toggle';
    const isOffClass = props.toggle ? 'toggle' : 'toggle off';
    const isOn = true;
    const isOff = false;



    return (
        <>
            <p>TOGGLE --- Controlled</p>
            <div className={"OnOff"}>
                <button onClick={() => props.onClick(isOn)} className={isOnClass}>On</button>
                <button onClick={() => props.onClick(isOff)} className={isOffClass}>Off</button>
            </div>
        </>
    );
};