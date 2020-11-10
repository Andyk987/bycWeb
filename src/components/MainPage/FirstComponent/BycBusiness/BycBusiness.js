import React, { useState } from 'react';

import styles from './BycBusiness.module.scss';
import SlideLabel from './SlideLabel';

const BycBusiness = () => {
    const [business_text] = useState([
        "분당청년회 사업"
    ]);
    
    let busText =
        <div className={styles.Bus_Text}>
            <span>{business_text}</span>
        </div>;
    
    return (
        <div className={styles.BycBusiness}>
            {busText}
            <div className={styles.Boxes}>
                <SlideLabel />
            </div>
        </div>
    )
};

export default BycBusiness;