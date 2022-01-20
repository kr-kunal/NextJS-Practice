import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

const Hero = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 8rem;
  font-weight: 900;
`;

const Button = styled.button`
  height: 50px;
  width: 150px;
  border: 2px solid black;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  background-color: white;
  margin-top: 20px;
  &:hover{
    color: white;
    background-color: black;
  }
`;

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    router.push('/blog');
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>HOME</Heading>
        <Button onClick={handleClick}>Posts</Button>
      </Hero>
    </>
  );
}
