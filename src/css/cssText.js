import styled , {keyframes} from 'styled-components'



/*KEY FRAME*/
const textKeyframe = keyframes` 
    from{
        transform: translateY(0);
        transform-origin: 50% 50%;
        text-shadow: none;
    }
    to{
        transform: translateY(-50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  
    }

`

const arrowAnimation = keyframes`
    from{
      transform: translateX(-1vw);
    }
    to{
      transform: translateX(1vw);
    }
`


/*STYLE*/

export const WelcomeText = styled.h1`
    text-align: center;
    font-size: 3em;
    padding: 0 4vw;
    color: #272728;
    line-height: 1.6;
    animation: ${textKeyframe} 3s ease-in-out alternate both;
`



export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #E9F2F1;
    
`

export const Arrow = styled.img` 
    height: 5vh;
    filter: drop-shadow(5px 5px 6px black);
    animation: ${arrowAnimation} 1s infinite alternate;
    position: relative;
`

export const ToolTips = styled.span`
    
`


