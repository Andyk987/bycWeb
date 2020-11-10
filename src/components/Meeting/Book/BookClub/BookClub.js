import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const BookClub = ({match}) => {
    return (
        <div>
            <button>
                <NavLink to={`${match.url}/board`}>독서 게시판</NavLink>
            </button>
            <h1>우리가 책을 읽는 이유는 독서가 두려움을 이기는 힘, 세상을 바꾸는 무기가 되기 때문입니다.</h1><br/>
            <h1>소설은 부족한 감성을 채워주고, 해석 능력을 키울 수 있습니다.</h1><br/>
            <h1>인문학은 생각의 확장과 미래의 지표를 찾을 수 있습니다.</h1><br/>
            <h1>우리의 목적은 지식의 습득과 생각의 확장을 넘어서 현재의 삶을 알고, 미래의 방향을 정하는데 도움을 주는 것입니다.</h1>
            <i className="fas fa-angle-down"></i>
        </div>
    );
};

export default withRouter(BookClub);