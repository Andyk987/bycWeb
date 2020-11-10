import React from 'react';
import styles from './Layout.module.scss';

import Auxiliary from '../Auxiliary/Auxiliary';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';

const Layout = (props) => {
    return (
        <Auxiliary>
            <NavigationItems loginClick={props.loginClick}/>
            <main className={styles.Main}>{props.children}</main>
            
        </Auxiliary>
    );
};

export default Layout;