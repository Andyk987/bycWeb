import React, { useState, useEffect, useRef } from 'react';
import styles from './TextAnimation.module.scss';

const TextAnimation = () => {
    const [typedText] = useState([
        "능력있는 청년은 삶을 바꾸고",
        "행동하는 청년은 세상을 변화시킨다"
    ]);
    const [value, setValue] = useState();
    const [inType, setInType] = useState(false);
    
    const isMounted = useRef();
    
    let attachClasses = [styles.Blink];
    if(inType) {
        attachClasses.push(styles.Typing)
    }
    
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 5000;

    let textArrayIndex = 0;
    let charIndex = 0;
    
    const type = () => {
        if(charIndex < typedText[textArrayIndex].length + 1) {
            if(isMounted.current) {
                setValue(typedText[textArrayIndex].substring(0, charIndex));
                charIndex ++;
                setTimeout(type, typingDelay);
            }
        } else {
            if(isMounted.current) {
                setInType(false);
                setTimeout(erase, newTextDelay);
            }
        }
    };

    const erase = () => {
        if(charIndex > 0) {
            if(isMounted.current) {
                setValue(typedText[textArrayIndex].substring(0, charIndex - 1));
                charIndex --;
                setTimeout(erase, erasingDelay);
            }
        } else {
            if(isMounted.current) {
                setInType(false);
                textArrayIndex ++;
                if(textArrayIndex >= typedText.length) {
                    textArrayIndex = 0;
                }
                setTimeout(type, newTextDelay - 3100);
            }
        }
    };
    
    useEffect(() => {
        isMounted.current = true;
        type();
        return () => {
            isMounted.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.TextAnimation}>
            <span className={styles.Text} >{value}</span><span className={attachClasses.join(' ')} >&nbsp;</span>
        </div>
    );
};

export default TextAnimation;