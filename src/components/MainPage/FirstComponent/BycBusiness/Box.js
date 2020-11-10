import React, { useState } from 'react';

import styles from './Box.module.scss';
import business_book from '../../../../assets/img/business_img/business_book.jpg';
import business_youth from '../../../../assets/img/business_img/business_youth.jpg';
import business_politics from '../../../../assets/img/business_img/business_politics.jpg';
import business_travel from '../../../../assets/img/business_img/business_travel.jpg';

const Box = (props) => {
	const [business_card] = useState({
        first: {
            title: "동아리사업",
            description: [
				"대표적으로 두 개의 동아리,",
				"마술동아리와 책 동아리를 주 1회 운영합니다."
			],
			img: business_book
        },
        second: {
            title: "청년의제사업",
            description: "청년의 이익을 위해서 활동하는 분당청년회는 청년월세와 최저임금 1만원과 같은 청년의제 사업을 기획하고 진행합니다.",
			img: business_youth
        },
        third: {
            title: "정치참여",
            description: 
            "정치에 문화와 예술을 더합니다.누구나 참여하고 싶고, 또 보고 싶은집회를 만들어 봅니다. 신기한 마술로의미를 전달하거나 수준높은 첼로 연주, 정치내용을 담은 문학              작품 발표등 집회를 새롭게 디자인 합니다.",
			img: business_politics
        },
        fourth: {
            title: "여행",
            description: "역사기행, 동아리 자유여행, 세계여행을 떠납니다. 많은 종류의 여행을 직접 기획하고 준비합니다.",
			img: business_travel
        }
    });
	
	let Box_Title = null;
	let Box_Img = null;
	let Box_Description = null;
	
	switch(props.number) {
		case "first":
			Box_Img = <img alt="Thanks" src={business_card.first.img} className={styles.Img}></img>;
			Box_Title = <span className={styles.Box_Title}>{business_card.first.title}</span>;
			Box_Description =(
				<div className={styles.Box_Description}>
					<span>{business_card.first.description[0]}</span>
					<span>{business_card.first.description[1]}</span>
				</div>
			)
			break
		case "second":
			Box_Img = <img alt="Thanks" src={business_card.second.img} className={styles.Img}></img>;
			Box_Title = <span className={styles.Box_Title}>{business_card.second.title}</span>;
			Box_Description = (
				<div className={styles.Box_Description}>
					<span>{business_card.second.description}</span>
				</div>
			)
			break
		case "third":
			Box_Img = <img alt="Thanks" src={business_card.third.img} className={styles.Img}></img>;
			Box_Title = <span className={styles.Box_Title}>{business_card.third.title}</span>;
			Box_Description = (
				<div className={styles.Box_Description}>
					<span>{business_card.third.description}</span>
				</div>
			)
			break
		case "fourth":
			Box_Img = <img alt="Thanks" src={business_card.fourth.img} className={styles.Img}></img>;
			Box_Title = <span className={styles.Box_Title}>{business_card.fourth.title}</span>;
			Box_Description = (
				<div className={styles.Box_Description}>
					<span>{business_card.fourth.description}</span>
				</div>
			)
			break
		default:
			console.log("Error");
	}
	
	return (
		<article className={props.className}>
			<div className={styles.Img_Wrapped}>
				{Box_Img}
			</div>
			<div className={styles.Text_Wrapped}>
				{Box_Title}
				{Box_Description}
			</div>
		</article>
	)
};

export default Box;