import React, { useEffect } from 'react';
import axios from 'axios';

const Activity = () => {
    useEffect(() => {
        loadBookData();
    }, [])
    
    let dataArray = [];
    
    const loadBookData = async () => {
        await axios({
            method: 'get',
            url: 'https://www.googleapis.com/books/v1/volumes?q=sapiens:keyes&key=AIzaSyAnrCWOWrcfyu3OWq2_7g-sjzQKP8WJuXU',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
        .then(res => {
            console.log(res);
        })
    };
    
    
    return (
        <div>
            <h1>활동</h1>
        </div>
    );
};

export default Activity;