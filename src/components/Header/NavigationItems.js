import React from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';
import Logo from '../../assets/Logo.png';

const NavigationItems = (props) => {
    return (
        <div className="NavigationItems">
            <div className="Logo">
                <NavLink to="/">
                    <img src={Logo} className="LogoImg"></img>
                </NavLink>
            </div>
            <NavigationItem link="/introduce">소개</NavigationItem>
            <NavigationItem link="/meeting">모임</NavigationItem>
            <NavigationItem link="/activity">활동</NavigationItem>
            <NavigationItem link="/login">로그인</NavigationItem>
        </div>
    );   
};

export default NavigationItems;