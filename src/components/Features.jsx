import React from 'react'
import characteristics from "../characteristics";
import Card from "../components/Card";
import styled from "styled-components"

const Feature=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:0 1.6rem;
`
const WhySpotify=styled.div`
    padding:2rem 0;
`
function Features() {
  return (
      <Feature>
          <WhySpotify>
            <h1>Why Spotify</h1>
          </WhySpotify>
          {characteristics.map((item,id)=>{
              return <Card id ={id}icon={item.icon} feature={item.feature} explain={item.explain}/>
          })}

          
      </Feature>
  );
}

export default Features