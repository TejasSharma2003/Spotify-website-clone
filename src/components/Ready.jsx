import React from 'react'
import "../styles/hero.css"
import styled from "styled-components"

const Main=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    font-size:1.5rem;
    padding:5rem 4rem;
    background: url(https://www.scdn.co/i/free/lets-play.svg) center center / 100% no-repeat, linear-gradient(-155deg, rgb(108, 14, 224) 55%, rgb(240, 55, 166) 115%) rgb(108, 14, 224);
    @media screen and (min-width:750px)
    {
        padding:7rem 4rem;
    }
`
const ReadyH1=styled.h1`
    color:#fff;
    text-align: center;
    font-weigth:600;
    @media screen and (min-width:1150px)
    {
        font-size:4.3rem;
    }
`
function Ready() {
  return (
      <Main className="main-ready-container">
          <div>
              <ReadyH1>Ready? Let’s play.</ReadyH1>
          </div>
          <div>
          <div className="btn-hover">GET SPOTIFY FREE</div>
          </div>

      </Main>
  );
}

export default Ready