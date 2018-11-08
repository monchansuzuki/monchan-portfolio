import styled , {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'

const fadeOutMenu = keyframes`
    0%{
        opacity: 1;
    transform:translateX(0) scaleX(1) ;
    
    }
    100%{
    opacity: 0;
    transform:translateX(90vw) scaleX(0) ;
    
    }
`
const fadeInMenu = keyframes`
    from{
    width: 0;
    opacity: 0;
    }
    to{
    width: 90%;
    opacity: 1;
    }
`

const fadeInMenuForDeskstop = keyframes`
    from{
    width: 0;
    opacity: 0;
    }
    to{
    width: 75%;
    opacity: 1;
    }
`

export const MenuWarp = styled.div`
    height: 100vh;
    width: 90vw;
    position: fixed;
    top: 0;
    z-index: 2;
    right: 0vw;
    background: #D9E3E7;
    display: ${props=>props.activated?'grid':'none'};
    align-items: center;
    justify-items: center;
    grid-template-rows: 30% 5% 30% auto;
    animation: ${props=>props.activated?fadeInMenu:fadeOutMenu} 0.9s both ;
    box-shadow:-11px 17px 90px black;
    @media (min-width: 1280px){
    animation: ${props=>props.activated?fadeInMenuForDeskstop:fadeOutMenu} 0.9s both ;
    }
    `

export const ProfilPic = styled.img`
    width: 30%;
    height: auto;
    border-radius: 50%;
    grid-row-start: 1;
    grid-row-end: 2;
    box-shadow: 1px 3px 40px grey;
    @media (min-width: 1280px){
    width: 15%;
    }
    `

export const Line = styled.div`
    width: 90%;
    background: #F0474A;
    height: 1px;
    `
export const WarpLink = styled.nav`
    display: flex;
    flex-direction: column;
`

export const NewLink = styled(Link)`
    color: #2B2C30;
    font-size: 2em;
    text-shadow: 4px 4px 19px;
    text-decoration: none;
    opacity: ${props=>props.activated==="true"?'1':'0'};
    padding: 1vh;
    
    :hover{
    color: gold;
    }

`

export const WarpSocial = styled.div`
    display: flex;
    justify-content: space-around;
    `
export const Logo = styled.img`
    width: 100%;
    height: auto;
    filter: drop-shadow(2px 2px 15px grey);
    @media (min-width: 1280px){
    
    }
`

