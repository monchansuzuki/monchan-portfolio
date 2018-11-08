import React from 'react';
import {TextWrapper, WelcomeText, Arrow } from '../css/cssText'
import arrow from '../img/arrow-point-to-right.svg'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <TextWrapper>
            <WelcomeText>
                Hi , i am Tamon Suzuki
                and i m a WebDev
            </WelcomeText>
            <Link to='/portfolio'><Arrow src={arrow} alt="SEE MY PORTFOLIO"/></Link>
        </TextWrapper>
    );
};

export default Welcome;