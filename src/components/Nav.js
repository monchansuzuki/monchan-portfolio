import React from 'react';
import {MenuWarp , ProfilPic , Line , NewLink , WarpLink , WarpSocial , Logo} from '../css/cssMenu'
import profilPic from '../img/profil.png'
import sd from '../img/soundcloud.png'
import fb from '../img/github.svg'
import li from '../img/linkin.png'


const Nav = (props) => {
    return (
        <MenuWarp activated={props.isActivated}>
            <ProfilPic src={profilPic}/>
            <Line/>
            <WarpLink>
                <NewLink to='/portfolio' activated={props.isActivated.toString()} onClick={props.handleClick} >Portoflio </NewLink>
                <NewLink to='/about' activated={props.isActivated.toString()} onClick={props.handleClick}>About Me </NewLink>
            </WarpLink>
            <WarpSocial>
                <a href="https://soundcloud.com/tamon-suzuki" className="link-social" target="_blank"><Logo src={sd}/></a>
                <a href="https://github.com/monchansuzuki" className="link-social" target="_blank"><Logo src={fb}/></a>
                <a href="https://www.linkedin.com/in/tamon-suzuki-8596a211b/" className="link-social" target="_blank"><Logo src={li}/></a>
            </WarpSocial>
        </MenuWarp>
    );
};

export default Nav;