import React from 'react';
import './Input.scss';

const Input = (props) => {
    return (
        <input
            type={props.elementType}
            placeholder={props.elementPlaceholder}
            value={props.elementValue}
            name={props.elementName}
            onChange={props.elementOnChange}
            onSubmit={props.elementOnSubmit}
            className={props.elementClassName}
            ref={props.elementRef}
            />
    )
};

export default Input;