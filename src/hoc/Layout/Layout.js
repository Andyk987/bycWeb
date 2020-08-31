import React, { useState } from 'react';
import styles from './Layout.module.scss';

import Auxiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/Navigation/NavigationItems/NavigationItems';
import Footer from '../../components/Navigation/Footer/Footer';

const Layout = (props) => {
    return (
        <Auxiliary>
            <Header/>
            <main className={styles.Main}>{props.children}</main>
            <Footer></Footer>
        </Auxiliary>
    );
};

export default Layout;