import React, { useState, Fragment } from 'react';
import './Footer.scss';

const Footer = () => {
    const [FootMenu, setFootMenu] = useState([
        {
            name: 'BYC',
            lists: ['소개', '지도', '일정']
        },
        {
            name: 'Donate',
            lists: ['cms', '약관', '혜택']
        }
    ]);
    
    const listArray = [...FootMenu];
    let listName = (
        listArray.map(( data, i ) => {
            return <h1>{data.name}</h1>;
        })
    );
    
    return (
        <div className="Footer">
            <div>
                {listName}
            </div>
            <div>
                <ul>
                    <li>소개</li>
                    <li>지도</li>
                    <li>일정</li>
                </ul>
                <ul>
                    <li>cms</li>
                    <li>약관</li>
                    <li>혜택</li>
                </ul>
            </div>
            <div>BYC {new Date().getFullYear()}</div>
        </div>
    );
};

export default Footer;