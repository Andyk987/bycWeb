import React from 'react';
import { Route} from 'react-router-dom';

import Book from './Book/Book';
import Meeting_Introduce from './Meeting_introduce';


const Meeting = ({match}) => {
    return (
        <div>
            <Route exact path={`${match.url}`} component={Meeting_Introduce} />
            <Route path={`${match.url}/book`} component={Book} />
        </div>
    )
};

export default Meeting;