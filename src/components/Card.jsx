import React from 'react'
import styled from "styled-components"

function Card({icon,feature,explain,id}) {
    const Image=styled.img`
    // width:${(id===2)?'70%':'80%'}  
        width:100%;
        min-width:76px;
        max-width:100px;

        @media screen and (min-width:750px)
        {
            max-width:115px;
        }
        @media screen and (min-width:1150px)
        {
            max-width:130px;
        }
    `
    const ItemPara=styled.p` 
        font-size:1.2rem;
        font-weight:bold;
        margin-bottom:0.5rem;
    `
    const FeatureDetail=styled.div` 
        
        // padding-left:${(id)!=2?'1rem':null};
        padding-left:1.7rem;
        @media screen and (min-width:1150px)
        {
            text-align:center;
            margin-top:1rem;
        }
    `
    const Explain=styled.p`
        // max-width:40%;
        font-weight:500;
        @media screen and (min-width:750px)
        {
            max-width:270px;
        }


    `
    const Items=styled.div`
        display:flex;
        align-items:center;
        margin-bottom:2rem;
        @media screen and (min-width:1150px)
        {
            flex-direction:column;
            align-items:center;
        }

        
    `
    return (
        <Items>
            <div>
                <Image src={icon} alt="" />
            </div>
            <FeatureDetail>
                <ItemPara>{feature}</ItemPara>
                <Explain>{explain}</Explain>
            </FeatureDetail>
        </Items>

    );
}

export default Card