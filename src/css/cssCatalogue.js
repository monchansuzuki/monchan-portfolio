import styled ,{keyframes} from 'styled-components'


export const WarpAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 12vh;
  @media (min-width: 768px){
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  }
`

export const WarpCata = styled.div`
    
    width: 90vw;
    padding: 2vh 0;
    position: relative;
    @media (min-width: 768px){
    width: 48vw;
    }
    @media(min-width: 1024px){
    width: 30vw;
    }
`

export const WarpImgContent = styled.div`
    position: relative;
box-shadow: 10px 10px 17px -4px rgba(0,0,0,0.75);
border: 0px solid #000000;
border-radius: 7px 7px 7px 7px;


`
export const Img = styled.img`
width:100%;
 :hover{
 transform: scale();
 }
`
export const Content = styled.p`
   position : absolute;
    opacity: 0;
   top : 0;
   right: 0;
   left: 0;
   text-align: center;
   font-size: 2em;
   line-height: 1.6;
   bottom : 0;
   background : #F6E0ED;
    transition : opacity 0.8s;
   cursor : pointer;

   :hover{
    opacity: 0.7;
   }
`

export const WarpBadge = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2% 0;
    flex-wrap: wrap;
`

export const Badge = styled.div`
    border-radius: 5px;
    background: #00ADA5;
    color: white;
    padding: 0;
    padding: 1vh 1vw;
    font-size: 1.3em;
box-shadow: 10px 10px 55px -6px rgba(0,0,0,0.75);
`
