import React from 'react';
import BookClub from './BookClub/BookClub';
import BookPreview from './BookPreview/BookPreview';
import { Route, withRouter } from 'react-router-dom';
import Layout from '../../hoc/Layout/Layout';

const Book = ({match}) => {
    return (
            <div>
                <BookPreview />
                <BookClub />
            </div>
    );
};

export default withRouter(Book);