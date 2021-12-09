import React from 'react';

type SwitchProps = {
    isOn: boolean,
    handleToggle: () => void,
    onColor: string,
    onText?: string,
    offText?: string
};

const Switch = ({ 
    isOn, onColor, 
    handleToggle,
    onText, offText
}: SwitchProps) => {
    return <div className="react-switch">
        <input
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
        />
        <label
            style={{ background: isOn ? onColor : '' }}
            className="react-switch-label"
            htmlFor={`react-switch-new`}
        >
            <span className={`react-switch-text react-switch-${isOn ? 'left' : 'right'}`}>
                {isOn ? onText : offText}
            </span>
            <span className={`react-switch-button`} />
        </label>
    </div>
};

export default Switch;