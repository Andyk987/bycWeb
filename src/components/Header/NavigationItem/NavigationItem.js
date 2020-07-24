import React from 'react';
import { NavLink } from 'react-router-dom';


const NavigationItem = (props) => {
    return (
        <NavLink to={props.link} className="NavigationItem">{props.children}</NavLink>
    );
    
};

export default NavigationItem;