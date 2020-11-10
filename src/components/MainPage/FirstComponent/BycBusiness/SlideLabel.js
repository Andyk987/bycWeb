import React, { useState, useEffect } from 'react';

import styles from './SlideLabel.module.scss';
import Box from './Box';

const SlideLabel = () => {
	const [inputType] = useState({
		type: "radio",
		name: "slider"
	})
	
	const [business_card] = useState({
        first: {
            title: "동아리사업",
            description: "대표적으로 두 개의 동아리, 마술동아리와 책 동아리를 주 1회 운영합니다.",
            color: "black"
        },
        second: {
            title: "청년의제사업",
            description: "청년의 이익을 위해서 활동하는 분당청년회는 청년월세와 최저임금 1만원과 같은 청년의제 사업을 기획하고 진행합니다.",
            color: "red"
        },
        third: {
            title: "정치참여",
            description: 
            "정치에 문화와 예술을 더합니다.누구나 참여하고 싶고, 또 보고 싶은집회를 만들어 봅니다. 신기한 마술로의미를 전달하거나 수준높은 첼로 연주, 정치내용을 담은 문학              작품 발표등 집회를 새롭게 디자인 합니다.",
            color: "green"
        },
        fourth: {
            title: "여행",
            description: "역사기행, 동아리 자유여행, 세계여행을 떠납니다. 많은 종류의 여행을 직접 기획하고 준비합니다.",
            color: "silver"
        }
    });
	
	useEffect(() => {
		const line = document.getElementsByClassName(styles.Line);
		const label = document.querySelectorAll('label p');
		const input = document.querySelectorAll('section input');
		const box = document.querySelectorAll('label article');
		
		const offset = (e) => {
			line[0].style.left = e.offsetLeft+'px';
			line[0].style.width = e.offsetWidth+'px';
		};
		
		const indicator = (e, index) => {
			offset(label[index]);
			for(var j=0;j<label.length;j++) {
				label[j].style.opacity = 0.3;
				if(j === index) {
					label[index].style.opacity = 1;
				}
			}
		};
		
		const getIndex = (comp, e) => {
			const arr = [];
			for(var i=0;i<comp.length;i++) {
				arr.push(comp[i])
			}
			return arr.indexOf(e);
		}
		
		const opacityTo0Point3 = (e) => {
			const arr = [];
			for(var k=0;k<input.length;k++) {
				arr.push(input[k])
			}
			const checked = arr.filter(i => i.checked === true);
			const index = getIndex(input, checked[0]);
			e.target.style.opacity = 0.3;
			label[index].style.opacity = 1;
		}
		
		const lineEvent = (component, hover) => {
			component.forEach(list => {
				list.addEventListener('click', e => {
					const index = getIndex(component, e.currentTarget);
					indicator(component[index], index);
				})
				if(hover === true) {
					list.addEventListener('mouseenter', e => {
						e.target.style.opacity = 1;
					})
					list.addEventListener('mouseleave', e => {
						opacityTo0Point3(e);
					})
				}
			})
		}
		
		label[0].style.opacity = 1;
		offset(label[0]);
		lineEvent(label, true);
		lineEvent(box);
	})

	return (
		<section className={styles.Slider}>
			<div className={styles.Checks}>
				<div className={styles.Checks_Wrapped}>
					<label key={styles.check1} htmlFor={styles.s1} className={styles.Check_Label}>
						<p className={styles.Check} id={styles.check1}>동아리사업</p>
					</label>
					<label key={styles.check2} htmlFor={styles.s2} className={styles.Check_Label}>
						<p className={styles.Check} id={styles.check2}>청년의제사업</p>
					</label>
					<label key={styles.check3} htmlFor={styles.s3} className={styles.Check_Label}>
						<p className={styles.Check} id={styles.check3}>정치참여</p>
					</label>
					<label key={styles.check4} htmlFor={styles.s4} className={styles.Check_Label}>
						<p className={styles.Check} id={styles.check4}>여행</p>
					</label>
					<div className={styles.Line}></div>
				</div>
			</div>
			<input key={inputType.name+1} type={inputType.type} name={inputType.name} id={styles.s1}  defaultChecked />
			<input key={inputType.name+2} type={inputType.type} name={inputType.name} id={styles.s2} />
			<input key={inputType.name+3} type={inputType.type} name={inputType.name} id={styles.s3} />
			<input key={inputType.name+4} type={inputType.type} name={inputType.name} id={styles.s4} />
			<label key={business_card[0]} htmlFor={styles.s1} className={styles.Slide} id={styles.slide1}>
				<Box number="first" className={styles.Box1} />
			</label>
			<label key={business_card[1]} htmlFor={styles.s2} className={styles.Slide} id={styles.slide2}>
				<Box number="second" className={styles.Box2} />
			</label>
			<label key={business_card[2]} htmlFor={styles.s3} className={styles.Slide} id={styles.slide3}>
				<Box number="third" className={styles.Box3} />
			</label>
			<label key={business_card[3]} htmlFor={styles.s4} className={styles.Slide} id={styles.slide4}>
				<Box number="fourth" className={styles.Box4} />
			</label>
		</section>
	);
};

export default SlideLabel;