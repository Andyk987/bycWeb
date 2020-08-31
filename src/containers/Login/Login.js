import React, { useState } from 'react';
import styles from './Login.module.scss';
import { NavLink, withRouter } from 'react-router-dom';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Input from '../../components/UI/Input/Input';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = (props) => {
    const [InputValue, setInputValue] = useState({
        email: {
            config: {
                type: "email",
                placeholder: "Email",
                value: '',
                name: 'email'
            }
        },
        password: {
            config: {
                type: "password",
                placeholder: "Password",
                value: '',
                name: 'password'
            }
        }
    });
    
    const [cookies, setCookie, removeCookie] = useCookies(['email']);
    
    let inputArray = [];
    for(let key in InputValue) {
        inputArray.push({
            id: key,
            form: InputValue[key]
        })
    }
    console.log(inputArray);
       
    let inputForm = inputArray.map(data => (
        <Input
            key={data.id}
            elementType={data.id}
            elementPlaceholder={data.form.config.placeholder}
            elementValue={data.form.config.value}
            elementName={data.form.config.name}
            elementOnChange={(e) => changeHandler(e, data.id)}
            elementClassName={styles.LoginInput}
            />
    ));
    
    const changeHandler = (e, id) => {
        const updateInput = {...InputValue};
        updateInput[id].config.value = e.target.value;
        setInputValue(updateInput);
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        setCookie('email', InputValue.email.config.value, { path: '/', secure: true });
        axios({
            method: 'post',
            url: 'https://graphql-api.run.goorm.io/login',
            withCredentials: true,
            headers: {"Access-Control-Allow-Origin": "*"},
            data: {
                email: InputValue.email.config.value,
                password: InputValue.password.config.value
            }
        })
        .then(response => {
            if(response.data === "User Not Exists") {
                removeCookie('email');
                console.log(response);
                alert("비밀번호가 잘못됐습니다");
                window.location.replace('/login');
            }else {
                window.location.replace('/');
            }
        })
        .catch(error => {
            console.log(error);
        })
    };
     
    return (
        <Auxiliary>
            <form onSubmit={e => submitHandler(e)}>
                {inputForm}
                <input type="submit" value="submit" className={styles.LoginSubmit} />
            </form>
            <NavLink to="/join">
                <button className={styles.JoinBt}>Join</button>
            </NavLink>
        </Auxiliary>
        
    );
};

export default withRouter(Login);