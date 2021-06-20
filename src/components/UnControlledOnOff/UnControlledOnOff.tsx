import React, {useState} from "react";

export const UnControlledOnOff = () => {
    console.log('OnOff rendering')
    let [toggle, setToggle] = useState(false);
    const isOnClass = toggle ? 'toggle on' : 'toggle';
    const isOffClass = toggle ? 'toggle' : 'toggle off';
    const isOn = true;
    const isOff = false;

    return (<>
            <p>TOGGLE --- UnControlled</p>
            <div className={"OnOff"}>
                <button onClick={()=> setToggle(isOn)} className={isOnClass}>On
                </button>

                <button onClick={()=> setToggle(isOff)} className={isOffClass}>Off
                </button>
            </div>
        </>

    );
};