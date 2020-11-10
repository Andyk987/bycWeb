import React, { useState } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import styles from './Meeting_introduce.module.scss';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import BookImage from '../../assets/book.jpg';
import MagicImage from '../../assets/magic.jpg';

const Meeting = ({match}) => {
    const [pageLink] = useState({
        book: {
            link: `${match.url}/book`,
            image: BookImage,
            title: '독서'
        },
        magic: {
            link: `${match.url}/magic`,
            image: MagicImage,
            title: '마술'
        }
    });
    
    const pageArray = [];
    for(let key in pageLink) {
        pageArray.push({
            id: key,
            link: pageLink[key].link,
            image: pageLink[key].image,
            title: pageLink[key].title
        })
    }
    let pageForm = null;
    pageForm = pageArray.map(data => {
        return(
            <div className={styles.BackNavImage}>
                <NavLink to={data.link}>
                    <img src={data.image} className={styles.NavImage} alt="i"/>
                </NavLink>
                <NavLink to={data.link}>
                    <p>{data.title}</p>
                </NavLink>
                
                <button>보기</button>
            </div>
        ) 
    })
    
    
    
    return (
        <Auxiliary>
            <div className={styles.Meeting}>
                <div>
                    {pageForm}
                    <div className={styles.EmptyImage}></div>
                    <div className={styles.EmptyImage}></div>
                </div>
            </div>
        </Auxiliary>
    )
};

export default withRouter(Meeting);