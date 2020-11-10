import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainComponent.module.scss';
import video from '../../../assets/video1.mp4';
import TextAnimation from '../TextAnimation/TextAnimation';

const MainComponent = () => {
	const [videoText] = useState({
        video: "Bundang Youth Club"
    });
    
    let onVideoText = (
        <div className={styles.OnVideoText}>
            <div className={styles.Design}></div>
            <h1 className={styles.Text}>{videoText.video}</h1>
        </div>
    )
    
    const style = {
        Mouse: {
            left: ((window.innerWidth - 15)*0.77) / 2
        },
        Arrow: {
            left: (((window.innerWidth - 15)*0.77) + 18.1) / 2
        }
    };
	
	return (
		<div className={styles.Video}>
			<div className={styles.Video_Wrapped}>
				<video src={video} loop autoPlay={true} muted />
			</div>
			<div className={styles.MainPage_OnVideo}>
				{onVideoText}
				<TextAnimation />
				<div className={styles.JoinButton}>
					<NavLink to="/join">
						<div className={styles.Button}>
							<p className={styles.Join}>Join</p>
						</div>
					</NavLink>
					<NavLink to="/join">
						<div className={styles.Arrow} />
					</NavLink>
				</div>     
			</div>
			<svg style={{ left: style.Mouse.left }} width="30" height="32" viewBox="0 0 36 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M34.5003 17.9999L34.5007 41.9999C34.5009 51.1126 27.1137 58.5 18.001 58.5002C8.88829 58.5003 1.50086 51.1132 1.50071 42.0005L1.5003 18.0005C1.50015 8.88777 8.88733 1.50034 18 1.50019C27.1127 1.50003 34.5001 8.88721 34.5003 17.9999Z" stroke="#140084" strokeWidth="3"/>
				<path d="M18 1V10" stroke="#140084" strokeWidth="3"/>
				<path d="M18 30V39" stroke="#140084" strokeWidth="3"/>
				<path d="M21.4999 20.3271C21.338 21.0305 21.1855 21.7144 21.0383 22.3746C20.5502 24.5637 20.1199 26.4937 19.5942 28.0206C19.2479 29.0264 18.9077 29.7045 18.5816 30.1093C18.2859 30.4765 18.1083 30.5 17.9997 30.5H17.9986C17.9461 30.5 17.774 30.5001 17.4557 30.0747C17.1162 29.6208 16.7722 28.8813 16.4243 27.8316C15.9802 26.4919 15.6147 24.9413 15.2185 23.26C14.9954 22.3132 14.7625 21.3249 14.5003 20.3095C14.5142 15.251 15.0834 12.7816 15.7649 11.5956C16.0749 11.0561 16.3834 10.8283 16.6617 10.7049C16.9783 10.5645 17.3907 10.5 17.9997 10.5C18.6085 10.5 19.025 10.5644 19.3464 10.7062C19.6297 10.8311 19.941 11.0606 20.252 11.5988C20.9366 12.7833 21.5078 15.255 21.4999 20.3271Z" stroke="#140084" strokeWidth="3"/>
				<path d="M21 39C21 40.6569 19.6569 42 18 42C16.3431 42 15 40.6569 15 39C15 37.3431 16.3431 36 18 36C19.6569 36 21 37.3431 21 39Z" fill="#140084"/>
			</svg>
			<div style={{ left: style.Arrow.left }} className={styles.Arrow2}></div>
		</div>
	)
};

export default MainComponent;