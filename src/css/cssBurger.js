import styled , {keyframes} from 'styled-components'

const burgerAnimation = keyframes`
    from{
        width: 10vw;
    }
    to{
        width: 15vw;
    }
`

const burgerAnimationReverse = keyframes`
   from{
   width: 15vw;
   }
   to{
   width: 10vw;
   }
`

export const LongBar = styled.div`
    width: 15vw;
    height: 1vh;
    box-shadow: 5px 5px 15px black;
    background: black;
    @media (min-width: 1280px){
    width: 10vw;
    }
    `
export const ShortBar = styled.div`
    width: 10vw;
    height: 1vh;
    margin-top: 2vh;
    background: black;
    box-shadow: 5px 5px 15px black;
    animation: ${ (props) => props.activated ? burgerAnimation : burgerAnimationReverse} 1s forwards;
@media (min-width: 1280px){
    min-width: 5vw;
    margin-top: 3vh;
    }
    `

export const BurgerWarpper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 5vh;
    right: 10%;
    z-index: 3;
    transition: 0.7s;
    cursor: pointer;
    :hover{
    opacity: 0.5;
    }
    @media (min-width: 1280px){
    
    }
    `