import styled from "styled-components";

const HomeProductsContainer = styled.div`
  padding: 5rem 0;
`;

const HomeProductsTitle = styled.h3`
  padding: 2rem 0;
  font-size: 3rem;
  font-weight: 500;
`;

const HomeProductsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SeeAllCta = styled.span`
  margin-top: 2rem;
  display: inline-block;
  color: #472d2d;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  transition: .5s ease-in;

  &:hover {
    transform: scale(1.1)
  }

  &:after {
    margin-left: 10px;
    content: '\\f061';
    font-family: 'FontAwesome';
    font-size: inherit;
  }
`;

export {
  HomeProductsContainer,
  HomeProductsTitle,
  HomeProductsWrapper,
  SeeAllCta,
};
