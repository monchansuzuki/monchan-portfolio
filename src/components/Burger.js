import React from 'react';
import {BurgerWarpper , LongBar , ShortBar} from '../css/cssBurger'

const Burger = (props) => {

    return (
        <BurgerWarpper onClick={props.handleClick}>
            <LongBar/>
            <ShortBar activated={props.isActivated}/>
            <ShortBar activated={props.isActivated}/>
        </BurgerWarpper>
    );
};

export default Burger;