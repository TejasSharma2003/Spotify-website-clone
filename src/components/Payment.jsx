import React from 'react'

import "../styles/payment.css"
function Payment() {
  return (

      <div className="payment-section">
        <div className="phone-img-div">
          <img className="phone-img" src="https://i.scdn.co/image/ab678e040000ed3ae21e83c79ebd4e3d5083bcf0" alt="" />
          <svg width="220" viewBox="0 0 314.16 614.64" class="sc-hQbnUn hwyIfC"><image width="1309" height="2561" transform="scale(0.24)" opacity="0.6" href="https://i.scdn.co/image/ab671c3d0000f4302ef0b5bf9cbfd01d6a9fc55c"></image><path d="M48.28,10H265.72A36.28,36.28,0,0,1,302,46.27v518a36.28,36.28,0,0,1-36.28,36.27H48.28A36.28,36.28,0,0,1,12,564.31v-518A36.28,36.28,0,0,1,48.28,10Z" fill="#fff"></path><path d="M137,35h40a3,3,0,0,1,0,6H137a3,3,0,0,1,0-6Z" fill="#231f20"></path></svg>
        </div>
        <div className="free">
          <h1>It's free.</h1>
          <h1>No credit card required.</h1>
        </div>
          
      </div>
  );
}

export default Payment