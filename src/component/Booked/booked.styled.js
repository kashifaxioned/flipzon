import styled, { keyframes } from "styled-components";

const grow = keyframes`
  from { transform: scale(0) }
  to { transformd: scale(1) }
`

const BookedContainer = styled.div`
  min-height: 80vh;
  padding: 8rem 0 5rem;
  text-align: center;
  transform: translateY(23%);

  & div {
    animation: ${grow} 1s linear;
  }

  & h3 {
    font-size: 4rem;
    font-weight: 500
  }

  & p {
    font-size: 1.2rem
  }
`;

export { BookedContainer };
