import React from 'react'
import "../styles/hero.css"

function HeroSection() {
  return (
      <div className="main">
        {/* phone image for pc / laptop */}
        <div className="phone-container">
          <div className="phn-img-container">
            <svg className="phn-img" viewBox="0 0 290 590.58" aria-hidden="true" focusable="false"><path d="M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z" fill="#fff"></path><path d="M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z" fill="#231f20"></path></svg>
            <img className="img-inside"src="https://i.scdn.co/image/ab678e040000ed3aed58911aecc6dbc16949f40b" alt="" />
          </div>

        </div>
        <div className="main-child">
          <div className="phn-mobile-container">
            <h1>Play millions of songs and podcasts, for free.</h1>
            <div className="btn-hover">GET SPOTIFY FREE</div>

          </div>
            

        </div>
            

      </div>
  );
}

export default HeroSection;