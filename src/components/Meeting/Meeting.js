import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import styles from './Meeting.module.scss';
import Book from '../Book/Book';
import BookBoard from '../Book/BookBoard/BookBoard';
import Reading from '../../assets/reading.jpg';

const Meeting = ({match}) => {
    console.log(match);
    return (
        <div className={styles.Meeting}>
            <img src={Reading} className={styles.ReadingImg}></img>
            <Route exact path={`${match.url}/book`} component={Book} />
            
        </div>
    )
};

export default withRouter(Meeting);