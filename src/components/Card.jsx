import React from 'react'
import styled from "styled-components"

const CardDiv=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:3rem;
    // width:90%;


`



function Card({icon,feature,explain,id}) {
    const Image=styled.img`
    // width:${(id===2)?'70%':'80%'}  
        widht:100%;
        max-width:110px
    `
    const ItemPara=styled.p` 
        font-size:1.2rem;
        font-weight:bold;
        margin-bottom:0.5rem;
    `
    const FeatureDetail=styled.div` 
        
        // padding-left:${(id)!=2?'1rem':null};
        padding-left:1.7rem;
    `
    const Explain=styled.p`
        // max-width:40%;
        font-weight:500;


    `
  return (
      <CardDiv>
          <div>
              <Image src={icon} alt="" />
          </div>
          <FeatureDetail>
              <ItemPara>{feature}</ItemPara>
              <Explain>{explain}</Explain>
          </FeatureDetail>

      </CardDiv>
  );
}

export default Card