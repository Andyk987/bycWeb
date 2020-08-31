import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import axios from 'axios';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useCookies } from 'react-cookie';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from  './NavigationItems.module.scss';
import Logo from '../../../assets/Logo.png';

const GET_CURRENTUSER = gql`
    query user($email: String!) {
        user(email: $email) {
            name,
            isLogin
        }
    }
`

const NavigationItems = (props) => {
    const [Menu, setMenu] = useState({
        introduce: {
            to: "/introduce",
            name: "소개",
        },
        activity: {
            to: "/activity",
            name: "활동",
        },
        space: {
            to: "/space",
            name: "공간",
        },
        support: {
            to: "/support",
            name: "후원"
        }
    });
    
    const [cookies, setCookie] = useCookies(['email']);
    const { loading, error, data } = useQuery(GET_CURRENTUSER, {
        variables: { email: cookies.email }
    });
    const [isHover, setIsHover] = useState(false);
    
    const menuArray = [];
    for(let key in Menu) {
        menuArray.push({
            id: key,
            form: Menu[key]
        })
    };
    console.log(menuArray);
    
    const logoutHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://graphql-api.run.goorm.io/logout',
            withCredentials: true,
            data: {
                name: "name"
            }
        })
        .then(response => {
            console.log(response);
            window.location.replace('/');
        })
        .catch(error => {
            console.log(error);
        })
    };
    
    let menuForm = [];
    let loginOrLogoutForm = <NavLink to="/login" className={styles.LoginMenu}>로그인</NavLink>;
    
    if(loading) return <p>Loading...</p>;
    if(error) {
        loginOrLogoutForm = <NavLink to="/login" className={styles.LoginMenu}>로그인</NavLink>
    }
    if(data) {
        console.log(data);
        if(data.user.isLogin) {
            loginOrLogoutForm = <NavLink to="/logout" onClick={e => logoutHandler(e)} className={styles.LoginMenu} >로그아웃</NavLink>
        }
    }
    
    let lineForm = null;
    
    const checkHover = () => {
        setIsHover(true);
    };
    
    const toogleHover = () => {
        setIsHover(false);
    };
    
    if(!isHover) {
        lineForm = <div className={styles.Line}></div>;
    }
    
    return (
        <div className={styles.NavigationItems}>
            <div className={styles.Logo}>
                <NavLink to="/">
                    <img src={Logo} className={styles.LogoImg}></img>
                </NavLink>
            </div>
            <div className={styles.Menu} >
                    <li>
                        <NavLink className={styles.MenuNav} to="/introduce">소개</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.MenuNav} to="/meeting">모임</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.MenuNav} to="/activity">활동</NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.MenuNav} to="support">후원</NavLink>
                    </li>
                {lineForm}
            </div>
            <div className={styles.LoginForm}>
                {loginOrLogoutForm}
            </div>
        </div>
    );   
};

export default withRouter(NavigationItems);