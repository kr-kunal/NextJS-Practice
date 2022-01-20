import { useRouter } from "next/router";
import styled from "styled-components";

const Hero = styled.div`
  height: 78vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

function ProductDetails (){

    const router = useRouter();
    const productId = router.query.productId

    return <>
        <Hero>

        <h1>Details About Product - {productId}</h1>
        </Hero>
    </>

}

export default ProductDetails;