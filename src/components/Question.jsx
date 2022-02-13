import React, { useState } from "react";
import "../styles/Question.css";
import styled from "styled-components";

const GotQue = styled.div`
  padding-bottom: 1rem;
  &.
  {
    font-weight: bold;
  }
`;
const Span = styled.span`
  color: #117a37;
  font-weight: 700;
`;
const List = styled.ul`
  margin-left: 1rem;
`;
function Question() {
  const [classStatusFirst, setClassStatusFirst] = useState(false);
  const [classStatusSecond, setClassStatusSecond] = useState(false);
  const [classStatusThird, setClassStatusThird] = useState(false);
  const [classStatusFourth, setClassStatusFourth] = useState(false);

  return (
    <div className="main-question">
      <GotQue>
        <h1>Got question?</h1>
      </GotQue>
      <div className="question-container">
        <div className="question-answer" onClick={()=>{setClassStatusFirst(!classStatusFirst)}}>
          <div className="question">
            <p>How do i create a playlist</p>
            <svg className="animate-arrow"style={{transform:classStatusFirst?'rotate(180deg)':'rotate(0deg)'}} role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>

          </div>
          <div className={`${classStatusFirst?'open':'close'}`}>
            <div className="p-tag">
              <p>
                Playlists are a great way to save collections of music, either
                for your own listening or to share.
              </p>
              <p>To create one:</p>
              <List>
                <ol type="1">
                  <li>Tap Your Library.</li>
                  <li>
                    Tap <Span>CREATE.</Span>
                  </li>
                  <li>Give your playlist a name.</li>
                  <li>Start adding songs (and we'll help you along).</li>
                </ol>
              </List>
            </div>
          </div>
        </div>
      </div>

      {/* Question two  */}
      <div className="question-container">
        <div className="question-answer" onClick={()=>{setClassStatusSecond(!classStatusSecond)}}>
          <div className="question">
            <p>How do I activate Data Saver mode?</p>
            <svg className="animate-arrow"style={{transform:classStatusSecond?'rotate(180deg)':'rotate(0deg)'}} role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>
          </div>
          <div className={`${classStatusSecond?'open':'close'}`}>
            <div className="p-tag" >
              <List>
                <ol type="1">
                  <li>Tap <Span>Home.</Span></li>
                  <li>Tap <Span>Setting.</Span></li>
                  <li>Tap <Span>Data Saver.</Span></li>
                  <li>Switch on Data Saver.</li>
                </ol>
              </List>
            </div>
          </div>
        </div>
      </div>

      {/* question third  */}

      <div className="question-container">
        <div className="question-answer" onClick={()=>{setClassStatusThird(!classStatusThird)}}>
          <div class="question">
            <p>Is it only possible to shuffle play music?</p>
            <svg className="animate-arrow"style={{transform:classStatusThird?'rotate(180deg)':'rotate(0deg)'}} role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>
          </div>
          <div className={`${classStatusThird?'open':'close'}`}>
            <div className="p-tag">
              <p>Any playlist with the shuffle icon will play on shuffle.</p>
              <p>Some playlists won't have the shuffle icon, so you can tap any song to play it.</p>
            </div>

          </div>
        </div>

      </div>

      {/* question fourth */}
      
      <div className="question-container">
        <div className="question-answer" onClick={()=>{setClassStatusFourth(!classStatusFourth)}}>
          <div className="question">
            <p>Where can I find Podcasts?</p>
            <svg className="animate-arrow"style={{transform:classStatusFourth?'rotate(180deg)':'rotate(0deg)'}} role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>
          </div>
          <div className={`${classStatusFourth?'open':'close'}`}>
            <div className="p-tag">
              <p style={{wordSpacing:'0.5px'}}>Tap <Span>Search</Span>. Under <Span>Browse All</Span>, tap Podcasts.</p>
            </div>

          </div>

        </div>
      </div>





    </div>
  );
}

export default Question;
