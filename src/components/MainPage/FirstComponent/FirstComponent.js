import React from 'react';
import styles from './FirstComponent.module.scss';

import BycBusiness from './BycBusiness/BycBusiness';

const FirstComponent = () => {
    return (
        <div className={styles.FirstComponent}>
            <BycBusiness />
        </div>
    );
};

export default FirstComponent;