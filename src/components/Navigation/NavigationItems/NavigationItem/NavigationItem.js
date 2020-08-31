import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationModal from '../../../UI/Modal/NavigationModal/NavigationModal';
import Auxiliary from '../../../../hoc/Layout/Layout';

import styles from './NavigationItem.module.scss';


const NavigationItem = (props) => {
    
    return (
        <Auxiliary>
            <div className={styles.NavigationItem}>
                <NavLink
                    key={props.key}
                    className={styles.Item_title}
                    to={props.elementTo}
                    >
                    {props.children}
                </NavLink>
            </div>
        </Auxiliary>
    );
    
};

export default NavigationItem;