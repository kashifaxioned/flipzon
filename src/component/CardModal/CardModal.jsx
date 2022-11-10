import React from "react";
import Modal from "react-modal";
import {useDispatch} from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addToCart } from "../../features/cart/cartSlice";
import {
  CardModalContainer,
  StyledCarousel,
  CardModalInfo,
  CardModadalFigure,
  CardModalTitle,
  CardModalPrice,
  CardModalDesc,
  AddtoCart,
} from "./cardModal.styled";

const customStyles = {
  content: {
    top: '20%',
    left: '10%',
    right: '10%',
    bottom: '10%',
  },
};

export default function CardModal(props) {
  const data = props.data;
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addToCart(data))
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      ariaHideApp={true}
      style={customStyles}
      appElement={document.getElementById("root")}
    >
      <CardModalContainer>
        <StyledCarousel infiniteLoop>
          {data.images.map((x, i) => {
            return (
              <CardModadalFigure key={i}>
                <img src={x} alt={data.title} />
              </CardModadalFigure>
            );
          })}
        </StyledCarousel>
        <CardModalInfo>
          <CardModalTitle>{data.title}</CardModalTitle>
          <CardModalPrice>${data.price}</CardModalPrice>
          <CardModalDesc>{data.description}</CardModalDesc>
          <AddtoCart onClick={handleClick} addToCart={props.addToCart}>{props.addToCart ? 'added!' : 'add to cart'} </AddtoCart>
        </CardModalInfo>
      </CardModalContainer>
    </Modal>
  );
}
