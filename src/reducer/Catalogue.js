import beersImg from '../img/catalogue/beer-of-chile.svg'
import vickyImg from '../img/catalogue/chez-vicky.svg'
import juego from '../img/catalogue/JUEGO DE MESA TABLERA.svg'
import lib from '../img/catalogue/librari.svg'
import mario from '../img/catalogue/mario-anim.svg'
import romain from '../img/catalogue/romain.svg'
import space from '../img/catalogue/space.svg'

const initState = {
    Projets:[
        {
            id : 1,
            title : 'Beers of chile',
            tags:['HTML' , 'CSS' , 'JAVASCRIPT' , 'PHP'],
            img : beersImg,
            content : 'This is a project that i ve made for an export company in Chile'
        },
        {
            id : 2,
            title : 'Chez vicky',
            tags : ['HTML' , 'CSS' , 'BootStrap' , 'Jquery'],
            img : vickyImg,
            content : 'This is Website that i ve make for a '
        },{
            id:3,
            title : 'Roman Danna',
            tags : ['React' , 'Redux' , 'Router'],
            img : romain,
            content : 'I ve made this portfolio with React'
        },{
            id:4,
            title : 'Library Coton',
            tags : ['Javascript' , 'HTML' , 'CSS'],
            img : lib,
            content : ''
        },{
            id:5,
            title : 'Mario',
            tags : ['Animation' , 'React'],
            img : mario,
            content : ''
        },{
            id:6,
            title : 'Photoshop',
            tags : ['PhotoShop'],
            img : space,
            content : ''
        },{
            id:7,
            title : 'Creative Game',
            tags : ['Photoshop' , 'Illustrator'],
            img : juego,
            content : ''
        }
    ]
}

export const reducerCatalogue = (state = initState , action )=>{
    let newStyle  = state;

    return newStyle
}