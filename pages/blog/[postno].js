import React from "react";
import styled from "styled-components";

const Hero = styled.div`
  height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
  background: #fff;

  h2,h3{
      margin: 15px;
  }
`;

export const getStaticPaths = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  const paths = res.map((post) => {
    return {
      params: {
        postno: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
    const id = ctx.params.postno;
    const res = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    ).json();
  
    return {
      props: {
        res,
      },
    };
  };


function postData({res}) {
  return (
    <>
      <Hero>
        <h2>Post No - {res.id}</h2>
        <h2>Title : {res.title}</h2>
        <h3>Content : {res.body}</h3>
      </Hero>
    </>
  );
}

export default postData;
