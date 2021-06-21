import React from "react";

export type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff: React.FC<OnOffType> = (props) => {
    console.log('OnOff rendering');


    const onStyle = {
        padding: '8px',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
        color: props.on ? 'white' : 'black',
        cursor: 'pointer'
    }

    const offStyle = {
        padding: '8px',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: !props.on ? 'red' : 'white',
        color: !props.on ? 'white' : 'black',
        cursor: 'pointer'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange(true)}>On</div>
            <div style={offStyle} onClick={() => props.onChange(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};