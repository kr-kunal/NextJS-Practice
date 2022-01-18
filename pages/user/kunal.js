import React from 'react'
import styled from 'styled-components';


const Hero = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  h2{
      margin-top: 20px;
  }
`;

function kunal() {
    return (
        <>
        <Hero>
            <h1>User Profile</h1>
           <h2> Kunal Patel </h2>
        </Hero>
        </>
    )
}

export default kunal
