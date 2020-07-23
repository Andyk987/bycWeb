import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.scss';

const NavigationItem = (props) => {
    return (
        <NavLink to={props.link} className="NavigationItem">{props.children}</NavLink>
    );
    
};

export default NavigationItem;