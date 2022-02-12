import {useState} from "react";
import Header from "./components/Header"
import SwipCard from "./components/SwipCard"
import HeroSection from "./components/HeroSection"
import Features from "./components/Features"
import { createGlobalStyle } from 'styled-components'
import Payment from "./components/Payment"
import Question from "./components/Question"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
function App() {
  const [clicked,setClicked]=useState(false);
  function clickedBurger(active)
  {
    setClicked(active)


  }
  return (
    <>
      <Header clickedBurger={clickedBurger}/>
      <SwipCard  statusClick={clicked}/>
      <HeroSection/>
      <Features/>
      <Payment/>
      <Question/>
    </>

  );
}

export default App;
