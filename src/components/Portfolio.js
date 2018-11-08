import React from 'react';
import {WarpCata,Img , WarpAll , Badge , WarpBadge , Content , WarpImgContent} from "../css/cssCatalogue";
import {connect} from 'react-redux'


const Portfolio = (props) => {
    const all =props.projets.map((projet)=>{
        return(
            <WarpCata key={projet.id}>
                <h1>{projet.title}</h1>
                <WarpBadge>
                {projet.tags.map(tag=>{
                    return <Badge>{tag}</Badge>
                })}
                </WarpBadge>
                <WarpImgContent>
                <Img src={projet.img}/>
                <Content>
                    {projet.content}
                </Content>
                </WarpImgContent>

            </WarpCata>
        )
    })
    return (
        <WarpAll>
            {all}
        </WarpAll>
    );
};


const mapStateToProps = (state)=>{
    return{
        projets : state.CataReducer.Projets
    }
}

export default connect(mapStateToProps)(Portfolio);