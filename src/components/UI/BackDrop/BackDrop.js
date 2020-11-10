import React from 'react';

import styles from './BackDrop.module.scss';

const Backdrop = (props) => {
    const style = {
        height: window.innerHeight,
        marginTop: window.scrollY
    }
    
    
    return (
        props.show ?
        <div className={styles.Backdrop}
            style={{height: style.height, marginTop: style.marginTop}}
            onClick={props.clicked}>
        </div> : null
    );
}

export default Backdrop;