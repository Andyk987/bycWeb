import React, { useState } from 'react';
import styles from './Login.module.scss';
import { NavLink, withRouter } from 'react-router-dom';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Input from '../../components/UI/Input/Input';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import GoogleLogin from './GoogleLoginForm/GoogleLoginForm';

const Login = (props) => {
    const [InputValue, setInputValue] = useState({
        email: {
            type: "email",
            placeholder: " 이메일을 입력하세요",
            value: '',
            name: 'Email',
            icon: "far fa-envelope"
        },
        password: {
            type: "password",
            placeholder: " 패스워드를 입력하세요",
            value: '',
            name: 'Password',
            icon: "fas fa-lock"
        }
    });
    
    const [setCookie, removeCookie] = useCookies(['email']);
    let attachClasses = [styles.Login, styles.Closed];
    
    if(props.open) {
        attachClasses = [styles.Login, styles.Open];
    }  
    
    let inputArray = [];
    for(let key in InputValue) {
        inputArray.push({
            id: key,
            placeholder: InputValue[key].placeholder,
            value: InputValue[key].value,
            name: InputValue[key].name,
            icon: InputValue[key].icon
        })
    }
       
    let inputForm = inputArray.map(data => (
        <Auxiliary key={data.id}>
            <p className={styles.LoginName}>{data.name}</p>
            <Input
                key={data.id}
                elementType={data.id}
                elementPlaceholder={data.placeholder}
                elementValue={data.value}
                elementName={data.name}
                elementOnChange={(e) => changeHandler(e, data.id)}
                elementClassName={styles.LoginInput}
                >
            </Input>
        </Auxiliary>
        
    ));
    
    const changeHandler = (e, id) => {
        const updateInput = {...InputValue};
        updateInput[id].value = e.target.value;
        setInputValue(updateInput);
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://graphql-api.run.goorm.io/login',
            withCredentials: true,
            headers: {"Access-Control-Allow-Origin": "*"},
            data: {
                email: InputValue.email.value,
                password: InputValue.password.value
            }
        })
        .then(response => {
            if(response.data === "User Not Exists") {
                removeCookie('email');
                console.log(response);
                alert("비밀번호가 잘못됐습니다");
            }else {
                setCookie('email', InputValue.email.value, { path: '/', secure: true });
                window.location.replace('/');
            }
        })
        .catch(error => {
            console.log(error);
        })
    };
    
    const style = {
        left: (window.innerWidth - 800) / 2,
        top: (window.scrollY) + ((window.innerHeight - 500) / 2)
    };
    
    return (
            <div className={attachClasses.join(' ')} style={{left: style.left, top: style.top}}>
                <div className={styles.Logo}>
                </div>
                <div className={styles.Login_Form}>
                    <div
                        className={styles.Close_Button}
                        onClick={props.close}>
                    </div>
                    <div className={styles.Form}>
                        <h1>Login</h1>
                        <form onSubmit={e => submitHandler(e)}>
                            {inputForm}
                            <p className={styles.Forgot}>
                                <NavLink to="/forgot-password">Forgot Password?</NavLink>
                            </p>
                            <input type="submit" value="submit" className={styles.LoginSubmit} />
                        </form>
                    </div>
                    <div className={styles.Social_Login}>
                        <p>Social Login</p>
                        <GoogleLogin google={"login"} />
                    </div>
                </div>
            </div>
    );
};

export default withRouter(Login);