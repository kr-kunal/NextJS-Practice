import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 78vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 8rem;
  font-weight: 900;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>CONTACT</Heading>
      </Hero>
    </>
  );
}