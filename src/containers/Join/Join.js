import React, { useState } from 'react';
import styles from './Join.module.scss';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Input from '../../components/UI/Input/Input';

const Join = (props) => {
    const [JoinValue, setJoinValue] = useState({
        name: {
            type: 'text',
            placeholder: 'Name',
            value: '',
            name: 'name'
        },
        email: {
            type: 'email',
            placeholder: 'email',
            value: '',
            name: 'email' 
        },
        password: {
            type: 'password',
            placeholder: 'password',
            value: '',
            name: 'password'
        },
        passwordCheck: {
            type: 'password',
            placeholder: 'password',
            value: '',
            name: 'passwordCheck'
        }
    });

    let joinArray = [];
    for(let key in JoinValue) {
        joinArray.push({
            id: key,
            form: JoinValue[key],
        })
    }
    
    let joinForm = joinArray.map(data => (
       <Input
           key={data.id}
           elementType={data.form.type}
           elementPlaceholder={data.form.placeholder}
           elementValue={data.form.value}
           elementName={data.form.name}
           elementOnChange={(e) => changeHandler(e, data.id)}
           elementClassName={styles.JoinInput}
           /> 
    ));
    
    const changeHandler = (e, id) => {
        const updateInput = {...JoinValue};
        updateInput[id].value = e.target.value;
        setJoinValue(updateInput);
    };
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://graphql-api.run.goorm.io/join',
            data: {
                name: JoinValue.name.value,
                email: JoinValue.email.value,
                password: JoinValue.password.value,
                passwordCheck: JoinValue.passwordCheck.value
            }
        })
        .then(res => {
            window.location.replace('/login');
        })
    }
    
    return (
        <div>
            <form onSubmit={e => submitHandler(e)}>
                {joinForm}
                <input type="submit" value="submit" className={styles.JoinSubmit} />
            </form>
        </div>
    );
};

export default withRouter(Join);