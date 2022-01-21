import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Hero = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  margin: 5px 0;
`;

const MyLink = (props) => {
  return (
    <Heading>
      <Link href={`/viewcoin?title=${props.add}`}>
        <a>{props.add}</a>
      </Link>
    </Heading>
  );
};

function Test() {
  return (
    <Hero>
      <MyLink add="acd12sgss" />
      <MyLink add="wwdas2e32dd2e" />
      <MyLink add="ddw33322ewwed" />
    </Hero>
  );
}

export default Test;
