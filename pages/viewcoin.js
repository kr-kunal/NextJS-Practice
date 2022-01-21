import { withRouter } from "next/router";
import styled from "styled-components";

const Hero = styled.div`
  height: 78vh;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const viewcoin = (props) => {
  return (
    <>
      <Hero> {props.router.query.title} Page </Hero>
    </>
  );
};

export default withRouter(viewcoin);
