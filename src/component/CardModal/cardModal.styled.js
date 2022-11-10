import styled from "styled-components";
import Modal from "react-modal";
import { Carousel } from "react-responsive-carousel";

const CardModalContainer = styled.div`
  padding: 2rem 0 0;
  display: flex;
  justify-content: space-evenly;
`;

const StyledCarousel = styled(Carousel)`
  flex-basis: 40%;
`;

const CardModalInfo = styled.div`
  padding: 2rem 0;
  flex-basis: 40%;
  background-color: #fff;
`;

const CardModadalFigure = styled.figure``;

const CardModalTitle = styled.h3`
  font-size: 2.7rem;
  font-weight: 500;
`;

const CardModalPrice = styled.span`
  padding: 20px 0;
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
`;

const CardModalDesc = styled.p``;

const CardModalClose = styled.span``;

const AddtoCart = styled.span`
  padding: 10px 20px;
  border: 1px solid #472d2d;
  border-radius: 10px;
  margin-top: 3rem;
  display: inline-block;
  background-color: ${(props) => (props.addToCart ? 'transparent' : "#472d2d")};
  color: ${(props) => (props.addToCart ? "#472d2d" : "#f7ecde")};
  cursor: pointer;
  pointer-events: ${props => props.addToCart && 'none'};
  text-transform: capitalize;
  transition: .3s ease-in;

  &:hover {
    background-color: transparent;
    color: #472d2d  
  }
`;

export {
  CardModalContainer,
  CardModalInfo,
  StyledCarousel,
  CardModadalFigure,
  CardModalTitle,
  CardModalPrice,
  CardModalDesc,
  CardModalClose,
  AddtoCart,
};
