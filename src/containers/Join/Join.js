import React, { useState } from 'react';
import styles from './Join.module.scss';
import { withRouter, Redirect } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import axios from 'axios';

import Input from '../../components/UI/Input/Input';

const GET_DATAS = gql`
    mutation createUser($name: String! $email: String! $password: String!) {
        createUser(name: $name email: $email password: $password) {
            name
            email
            password
        }
    }  
`

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
            placeholder: 'id',
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
    
    return (
        <div>
            <form action="https://graphql-api.run.goorm.io/join" method="post">
                {joinForm}
                <input type="submit" value="submit" className={styles.JoinSubmit} />
            </form>
        </div>
    );
};

export default withRouter(Join);