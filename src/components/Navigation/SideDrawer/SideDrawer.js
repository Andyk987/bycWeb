import React from 'react';
import { NavLink } from 'react-router-dom';
import BackDrop from '../../UI/BackDrop/BackDrop';
import styles from './SideDrawer.module.scss';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const SideDrawer = (props) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    
    return (
        <Auxiliary>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <NavLink to="/meeting/book">독서</NavLink>
                <NavLink to="/meeting/magic">마술</NavLink>
            </div>
        </Auxiliary>
    );
};

export default SideDrawer;