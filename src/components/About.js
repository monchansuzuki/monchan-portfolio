import React from 'react';
import styled , {keyframes} from 'styled-components'
import arrow from '../img/arrow-point-to-right.svg'
import {Link} from 'react-router-dom'
const AboutText = styled.p`
    text-align: center;
    padding-top: 10vh;
`

const AboutWarp = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    justify-content: center;
    position: relative;
    
`
const ArrowKeyFrame = keyframes`
    from{
    transform: translateX(0);
    transform: rotate(180deg);
    }
    to{
    transform: translateX(2vw);
    }
`
const ArrowBackPortfolio = styled.img`
    width: 5vw;
    transform: rotate(180deg);
    margin-left: 5vw;
    top: 5vh;
    position: absolute;
    animation: ${ArrowKeyFrame} 2s infinite alternate;
    transition : opacity 1s;
    cursor : pointer;
    :hover{
    animation: none;
    opacity: 0.7;
    }
    
`
const About = () => {
    return (
        <AboutWarp>
            <Link to='/portfolio'><ArrowBackPortfolio src={arrow}/></Link>
            <h1>About me</h1>
            <AboutText>
                Tamon Suzuki is a web developer wich like to bla bla bla bla bla...
            </AboutText>
        </AboutWarp>
    );
};

export default About;