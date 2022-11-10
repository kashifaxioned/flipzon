import styled from "styled-components";

const ProductCardContainer = styled.div`
  margin: 25px 0;
  flex-basis: calc(25% - 50px);
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    transform: scale(1.03);
    transition: 0.5s ease-in;
  }
`;

const ProductInfoContainer = styled.div`
  padding: 20px;
  border-top: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f7ecde;
  cursor: pointer;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const ProductPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const ProductDelivery = styled.span`
  font-size: 14px;
  text-transform: capitalize;
`;

const ProductCta = styled.span`
  padding: 10px 25px;
  border: 1px solid #472d2d;
  border-radius: 25px;
  margin-top: 20px;
  display: inline-block;
  background-color: ${(props) => (props.addToCart ? "#f7ecde" : "#472d2d")};
  color: ${(props) => (props.addToCart ? "#472d2d" : "#f7ecde")};
  cursor: pointer;
  pointer-events: ${props => props.addToCart && 'none'};
  text-align: center;
  text-transform: capitalize;
  transition: content 1s ease-in;

  &:hover {
    background-color: transparent;
    color: #472d2d;
  }
`;

export {
  ProductCardContainer,
  ProductInfoContainer,
  ProductTitle,
  ProductPrice,
  ProductDelivery,
  ProductCta,
};
