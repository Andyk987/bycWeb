import React from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/NavigationItems';

const Layout = (props) => {
    return (
        <Auxiliary>
            <Header></Header>
            <main>{props.children}</main>
        </Auxiliary>
    );
};

export default Layout;