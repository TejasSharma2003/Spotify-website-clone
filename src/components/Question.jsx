import React, { useState } from "react";
import "../styles/Question.css";
import styled from "styled-components";

const GotQue = styled.div`
  padding: 1rem;
`;
const Span = styled.span`
  color: #117a37;
  font-weight: 600;
`;
const List = styled.ul`
  margin-left: 1rem;
`;
function Question() {
  const [classStatus, setClassStatus] = useState('close');
  function handleClick() {
    setClassStatus(classStatus==='close'? "open" :'close');
  }

  return (
    <div className="main-question">
      <GotQue>
        <h1>Got question</h1>
      </GotQue>
      <div className="question-one-container">
        <div className="question-one" onClick={handleClick}>
          <div className="question">
            <p>How do i create a playlist</p>
            <svg className="animate-arrow"style={{transform:classStatus==='open'?'rotate(180deg)':'rotate(0deg)'}} role="img" focusable="false" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" class="Svg-ytk21e-0 fJEWJR sc-gVFcvn jrzUMQ"><polyline points="20 16 12 7 4 16" fill="none" stroke="#181818"></polyline></svg>

          </div>
          <div className={`animate-solution ${classStatus}`}>
            <div className="p-tag"style={{padding:'1.4rem'}}>
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
    </div>
  );
}

export default Question;
