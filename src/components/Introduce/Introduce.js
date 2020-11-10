import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Introduce.module.scss';

import { ParallaxProvider, Parallax } from "react-skrollr";
import intro1 from '../../assets/intro1.jpg';
import intro2 from '../../assets/intro2.jpg';
import intro3 from '../../assets/intro3.jpg';
import intro4 from '../../assets/intro4.jpg';

const Introduce = (props) => {
    const [intro] = useState({
        text: "분당청년회는 능력있고 행동하는 청년들의 집합입니다"
    });
    const [checkFixScroll, setCheckFixScroll] = useState(false);
    
    const introduceRef = useRef();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const text = document.getElementById("Texts");
        const header = document.getElementById('Nav');
		const body = document.getElementsByTagName('body');
        header.style.pointerEvents = "none";
        header.style.opacity = 0;
        text.style.position = "absolute";
        text.style.paddingTop = "0";
		body[0].style.overflow = "auto";
    });
    
    if(checkFixScroll) {
        const text = document.getElementById("Texts");
        text.style.position = "fixed";
        text.style.top = "10.2rem";
    }
    
    const isScroll = () => {
        if(window.location.pathname === "/introduce") {
            const h = document.getElementById("scrollHeight");
            const height = 1649 + ((h.scrollHeight + 188) * 3);
            if(window.scrollY < 255) {
                const header = document.getElementById('Nav');
                header.style.pointerEvents = "none";
                header.style.opacity = 0;
            }
            if(window.scrollY === 255 || window.scrollY > 255) {
                const header = document.getElementById('Nav');
                header.style.pointerEvents = "all";
                header.style.opacity = 1;
            }
            if(window.scrollY < 1190) {
                const picture = document.getElementById("Picture");
                picture.style.transform = "translate3d(100%, 0, 0)";
            }
            if(window.scrollY === 1190 || window.scrollY > 1190) {
                const picture = document.getElementById("Picture");
                picture.style.transform = "translate3d(0%, 0, 0)";
            }
            if(window.scrollY < 1648) {
                const text = document.getElementById("Texts");
                text.style.position = "absolute";
                text.style.top = "5.2rem";
            }
            if(window.scrollY === 1648 || window.scrollY > 1648) {
                if(introduceRef.current) {
                    setCheckFixScroll(true);
                }
            }
            if(window.scrollY < height && window.scrollY > 1648) {
                const text = document.getElementById("Texts");
                text.style.position = "fixed";
                text.style.top = "10.2rem";
                text.style.marginLeft = "6%";
            }
            if(window.scrollY === height || window.scrollY > height) {
                const text = document.getElementById("Texts");
                text.style.position = "unset";
                text.style.paddingTop = "0";
                text.style.marginLeft = "12%";
                text.style.marginTop = "7rem";
            }
        }
    };

    window.addEventListener('scroll', isScroll);
  
    return (
        <ParallaxProvider>
            <div className={styles.Introduce}>
                <div className={styles.Intro_Text}>
                    <span>{intro.text}</span>
                </div>
                <div className={styles.Intro_Pic1}>
                    <img src={intro1} alt="Text" />
                    <img src={intro2} alt="Text" />
                </div>
                <div className={styles.Intro_Pic2}>
                    <img src={intro3} alt="Text" />
                    <img src={intro4} alt="Text" />
                </div>
            </div>
            <div className={styles.ScrollComponent}>
                <Parallax>
                    <div className={styles.Scroll_Pictures} id="Picture">
                       <div className={styles.Scroll_Pic}>
                            <img src={intro1} alt="Text" />
                        </div>
                        <div className={styles.Scroll_Pic}>
                            <img src={intro1} alt="Text" />
                        </div>
                        <div className={styles.Scroll_Pic}>
                            <img src={intro1} alt="Text" />
                        </div>
                        <div className={styles.Scroll_Pic}>
                            <img src={intro1} alt="Text" />
                        </div> 
                    </div>
                </Parallax>
                <div className={styles.Scroll}>
                    <div className={styles.Scroll_Text} id="scrollHeight">
                    </div>
                </div>
                <div className={styles.Scroll}>
                    <div className={styles.Scroll_Text}>
                    </div>
                </div>
                <div className={styles.Scroll}>
                    <div className={styles.Scroll_Text}>
                    </div>
                </div>
                <div className={styles.Scroll}>
                    <div className={styles.Scroll_Text}>
                        <div className={styles.Wrapped} id="Texts">
                            <span>ㅣ설립배경</span>
                            <span>청년에 대한 새로운 정의가 필요합니다.</span>
                            <span>바로 능력과 행동입니다.</span>
                            <span>능력있는 청년은 자신의 삶을 바꿉니다.</span>
                            <span>더 나아가 행동하는 청년은 이 세상을 변화시킵니다.</span>
                            <span>누군가가 바라고 그리워하는 대상이 아니라,</span>
                            <span>시대를 주도하는 청년이 되어야 합니다.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Next}>
                
            </div>
        </ParallaxProvider>
    )
};

export default withRouter(Introduce);