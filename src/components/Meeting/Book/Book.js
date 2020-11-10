import React from 'react';
import BookClub from './BookClub/BookClub';
import BookPreview from './BookPreview/BookPreview';
import { withRouter } from 'react-router-dom';

const Book = ({match}) => {
    return (
            <div>
                <BookPreview />
                <BookClub />
            </div>
    );
};

export default withRouter(Book);