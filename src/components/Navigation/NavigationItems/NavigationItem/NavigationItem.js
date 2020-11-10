import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import styles from './NavigationItem.module.scss';
import { useCookies } from 'react-cookie';
import LoginOrUserModal from './LoginOrUserModal';


const GET_CURRENTUSER = gql`
    query user($email: String!) {
        user(email: $email) {
            name,
            isLogin,
            isGoogleLogin,
            isFacebookLogin,
            avatarUrl
        }
    }
`

const NavigationItem = (props) => {
    const [logo] = useState({
        to: "/",
        name: "BYC"
    })
    
    const [menu] = useState({
        introduce: {
            to: "/introduce",
            name: "소개",
        },
        activity: {
            to: "/meeting",
            name: "모임",
        },
        space: {
            to: "/activity",
            name: "활동",
        },
        support: {
            to: "/support",
            name: "후원"
        }
    });
    const [isHover] = useState(false);
    const [cookies] = useCookies(['email']);
    const { error, data } = useQuery(GET_CURRENTUSER, {
        variables: { email: cookies.email }
    });
    
    let attachClasses = [styles.NavigationItem];
    if(props.scroll) {
        attachClasses.push(styles.Sticky);
    }
    
    const menuArray = [];
    for(let key in menu) {
        menuArray.push({
            id: key,
            form: menu[key]
        })
    };
    
    let NavBar = menuArray.map(res => (
        <li className={styles.Items} key={res.id}>
            <NavLink to={res.form.to} className={styles.Item}>{res.form.name}</NavLink>
        </li>
    ));
    
    let lineForm = null;
    
    if(!isHover) {
        lineForm = <div className={styles.Line}></div>;
    }
    
    let loginOrUserModal = null;
    
    if(error) {
        loginOrUserModal = <LoginOrUserModal login={JSON.stringify('login')} loginClick={props.loginClick} />;
    }
    if(data) {
        if(data.user.isGoogleLogin) {
            loginOrUserModal = <LoginOrUserModal login={'google'} avatar={data.user.avatarUrl} loginClick={props.loginClick} />;
        } else if (data.user.isLogin) {
            loginOrUserModal = <LoginOrUserModal login={'logout'} />;
        } else {
            loginOrUserModal = <LoginOrUserModal login={'login'} loginClick={props.loginClick} />;
        }
    }
    
    return (
        <div className={attachClasses.join(' ')} id="Nav">
            <div className={styles.Wrapped}>
                <div className={styles.Logo}>
                    <NavLink to={logo.to}>
                        <p>{logo.name}</p>
                    </NavLink>
                </div>
                <div className={styles.NavItem}>
                    {NavBar}
                    {lineForm}
                </div>
                {loginOrUserModal}
            </div>
        </div>
    );
    
};

export default NavigationItem;