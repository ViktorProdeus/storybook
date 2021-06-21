import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}
export const UnControlledOnOff = (props: PropsType) => {
    console.log('OnOff rendering')
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        padding: '8px',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
        color: on ? 'white' : 'black',
        cursor: 'pointer'
    }

    const offStyle = {
        padding: '8px',
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        backgroundColor: !on ? 'red' : 'white',
        color: !on ? 'white' : 'black',
        cursor: 'pointer'
    }

    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClicked = () => {
        setOn(true);
        props.onChange(true);
    };

    const offClicked = () => {
        setOn(false);
        props.onChange(false);
    };

    return (<>
            <p>TOGGLE --- UnControlled</p>
            <div>
                <div onClick={onClicked} style={onStyle}>On</div>
                <div onClick={offClicked} style={offStyle}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        </>

    );
};