import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <div className={NavigationItems}>
            <NavigationItem link="/">홈</NavigationItem>
            <NavigationItem link="/introduce">소개</NavigationItem>
            <NavigationItem link="/meeting">모임</NavigationItem>
            <NavigationItem link="/activity">활동</NavigationItem> 
        </div>
    );   
};

export default NavigationItems;