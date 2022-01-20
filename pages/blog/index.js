import Link from "next/link";
import styled from "styled-components";

const Hero = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background: #fff;
`;

const Para = styled.li`
font-size: 1.4rem;
list-style: disc;
  margin: 10px;
  cursor: pointer;
`;

export const getStaticProps = async () => {
  const res = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  return {
    props: {
      res,
    },
  };
};

function blog({ res }) {
  return (
    <>
    <Hero>
      {res.slice(0, 10).map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <Para> {post.title} </Para>
            </Link>
          </div>
        );
      })}
      </Hero>
    </>
  );
}

export default blog;
