import React from 'react'
import characteristics from "../characteristics";
import Card from "../components/Card";
import styled from "styled-components"

const CardDiv=styled.div`
    display:grid;
    gap:1.3rem;

    flex-direction:column; 
    // width:90%;
    @media screen and (min-width:750px)
    {
      grid-template-columns:repeat(2,50%);
    }
    @media screen and (min-width:1150px)
    {
      grid-template-columns:repeat(4,1fr)
    }


`
const Feature=styled.div`
    display:flex;
    flex-direction:column;
    background-color:#fff ;
    position:relative;
    z-index:1;
    justify-content:center;
    align-items:center;
    padding:0 1.6rem;
    @media screen and (min-width:750px)
    {
      padding:3rem 1.6rem;
    }
`
const WhySpotify=styled.div`
    padding:2rem 0;
    text-align:center;
    @media screen and (min-width:750px)
    {
      padding-bottom:4rem;
    }

`
function Features() {
  return (
      <Feature>
          <WhySpotify>
            <h1>Why Spotify?</h1>
          </WhySpotify>
          <CardDiv>
            {characteristics.map((item,id)=>{
                return <Card id ={id}icon={item.icon} feature={item.feature} explain={item.explain}/>
            })}
          </CardDiv>
      </Feature>
  );
}

export default Features