import React, { useState } from 'react';
import styles from './UserModal.module.scss';
import Auxiliary from '../../../../hoc/Auxiliary/Auxiliary';

import { NavLink } from 'react-router-dom';

const UserModal = (props) => {
    const [userMenu] = useState({
        profile: {
            name: "프로필",
            to: "/:id"
        },
        setting: {
            name: "설정",
            to: "/setting"
        }
    });
    
    let attachedClasses = [styles.UserModal, styles.Closed];
    if(props.clicked) {
        attachedClasses = [styles.UserModal, styles.Open];
    }
    
    let UserModalArray = [];
    for(let key in userMenu) {
        UserModalArray.push({
            id: key,
            name: userMenu[key].name,
            to: userMenu[key].to
        })
    }
    
    let UserModalForm = UserModalArray.map(data => (
        <div className={styles.Modal}>
            <NavLink to={data.to} onClick={props.navClick}>
                {data.name}
            </NavLink>
        </div>
                
    ));
    
    return (
        <Auxiliary>
           <div className={attachedClasses.join(' ')}>
               {UserModalForm}
               <div className={styles.Logout}>
                   {props.logout}
               </div>
            </div>
        </Auxiliary>
        
    );
};

export default UserModal