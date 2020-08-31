import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationModal.module.scss';

const NavigationModal = (props) => {
    let attachedClasses = [styles.NavigationModal, styles.Close];
    
    if(props.open) {
        attachedClasses = [styles.NavigationModal, styles.Open]
    }
    
    return (
        <div className={attachedClasses.join(' ')}>
            <ul>
                <NavLink to={props.modalLink} className={styles.ModalLink}>
                    <li>
                        <div className={styles.LiMenu}>
                            <p>{props.modalMenu}</p>
                        </div>
                    </li>
                </NavLink>
                <NavLink to={props.modalLink2} className={styles.ModalLink}>
                    <li>
                        <div className={styles.LiMenu}>
                            <p>{props.modalMenu2}</p>
                        </div>
                    </li>
                </NavLink>
                <div className={styles.Line}></div>
            </ul>
        </div>
    );
};

export default NavigationModal;