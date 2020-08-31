import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import styles from './BookPreview.module.scss';

const BookPreview = ({match}, props) => {
    const [bookData, setBookData] = useState({
        title: "",
        contents: "",
        author: ""
    });
    
    useEffect(() => {
        loadBookData();
    }, [])
    
    let dataArray = [];
    
    const loadBookData = async () => {
        await axios({
            method: 'get',
            url: 'https://dapi.kakao.com/v3/search/book?&query=%EC%82%AC%ED%94%BC%EC%97%94%EC%8A%A4&target=title',
            data: {
                query: "사피엔스"
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                Authorization: "KakaoAK a17509102130ab855b3b12d73b99e03d"
            }
        })
        .then(res => {
            setBookData({
                title: res.data.documents[0].title,
                contents: res.data.documents[0].contents,
                author: res.data.documents[0].authors[0]
            })
        })
    };
    
    return (
        <div className={styles.BookPreview}>
            <strong>카카오 api통신 실험중에 있습니다..</strong>
            <h1>{bookData.title}</h1>
            <p>{bookData.author}</p>
            <p>{bookData.contents}</p>
        </div>
    );
};

export default withRouter(BookPreview);