import React, {useState, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LoginOrUserModal.module.scss';

import UserModal from '../../../UI/Modal/UserModal/UserModal';
import GoogleLoginForm from '../../../../containers/Login/GoogleLoginForm/GoogleLoginForm';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const LoginOrUserModal = (props) => {
    const [checkUserImgClick, setCheckUserImgClick] = useState(false);
    const [removeCookie] = useCookies(['email']);
    
    const UserImgRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(UserImgRef.current && !UserImgRef.current.contains(e.target)) {
                setCheckUserImgClick(false);
                console.log("Outside");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [UserImgRef]);
    
    const toogleUserClick = () => {
        setCheckUserImgClick(!checkUserImgClick);
    };
    
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
            removeCookie('email');
            window.location.replace('/');
        })
        .catch(error => {
            console.log(error);
        })
    };
    
    let Form = null; // eslint-disable-line no-unused-vars
    switch(props.login) {
        case 'login':
            return Form = <div onClick={props.loginClick} className={styles.Login}>
                    로그인
                   </div>;
        case 'google':
            const google = <GoogleLoginForm google={'logout'} />
            return Form = <div className={styles.User} ref={UserImgRef}>
                       <img src={props.avatar} className={styles.UserIcon} onClick={toogleUserClick} alt="Text" />
                       <UserModal logout={google} clicked={checkUserImgClick} navClick={toogleUserClick} /> 
                   </div>;
        case 'logout':
            return Form = <div className={styles.Logout}>
                    <NavLink to="/logout" onClick={e => logoutHandler(e)} className={styles.LoginMenu} >로그아웃</NavLink>
                   </div>
        default:
            return Form = <div onClick={props.loginClick} className={styles.Login}>
                    로그인
                   </div>;
    }
};

export default LoginOrUserModal;