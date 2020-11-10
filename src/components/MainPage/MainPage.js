import React, { useState, useEffect, useRef, createRef } from 'react';
import styles from  './MainPage.module.scss';

import ReactPageScroller from "react-page-scroller";
import MainComponent from './MainComponent/MainComponent';
import FirstComponent from './FirstComponent/FirstComponent';

const MainPage = (props) => {
	const [page] = useState({
		first: <MainComponent />,
		second: <FirstComponent />,
		class: styles.Scroll_Section
	});
	const [button_Class] = useState({
		first: styles.Prev,
		second: styles.Next
	});
	
	let sectionRefs = useRef([createRef(), createRef()]);
	let buttonRefs = useRef([createRef(), createRef()]);

	useEffect(() => {
		const body = document.getElementsByTagName('body');
		console.log(body);
		body[0].style.overflow = "hidden";
		if(window.performance) {
			if(performance.navigation.type === 1) {
				console.log("aaa");
				body[0].style.overflow = "hidden";
			}
		}
	})
	
    return (
		
			<div className={styles.MainPage}>
				<ReactPageScroller
					>
					{[page.first, page.second].map((el, i) =>
						<section key={i} className={page.class} ref={sectionRefs.current[i]}>
							{el}
						</section>
					)}
				</ReactPageScroller>	
			</div>
    );
}

export default MainPage;