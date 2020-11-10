import React, { useState } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    const [checkScroll, setCheckScroll] = useState(false);
    
    const isScroll = () => {
        if(window.scrollY === 7 || window.scrollY > 7) {
            setCheckScroll(true);
        }
        if(window.scrollY < 7) {
            setCheckScroll(false);
        }
    };
    
    window.addEventListener('scroll', isScroll);
    
    return (
        <NavigationItem loginClick={props.loginClick} scroll={checkScroll} />
    );   
};

export default NavigationItems;