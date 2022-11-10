import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardModal from "../CardModal/CardModal";
import { addToCart, removeToCart } from "../../features/cart/cartSlice";
import {
  CheckOutCardContainer,
  CheckOutCardFigure,
  CheckOutCardInfoContainer,
  CheckOutCardNoOfItems,
  CheckOutCardNoOfItemsContainer,
  CheckOutCardPrice,
  CheckOutCardTitle,
  CheckOutCardItemsCta,
  CheckOutCardRemoveWrapper,
} from "./checkoutProductCard.styled";

export default function CheckoutProductCard(props) {
  const state = useSelector((state) => state.cart.product);

  const data = props.data;

  const [noOfItems, setNoOfItems] = useState(1);

  const dispatch = useDispatch();

  const handleRemove = (e) => {
    const idx = state.indexOf(data);
    dispatch(removeToCart(idx));
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    if (noOfItems >= 2) {
      alert("You can buy only two items per product");
    } else {
      setNoOfItems((prev) => prev + 1);
    }
  };

  const handleDecrese = (e) => {
    e.stopPropagation();
    if (noOfItems > 1) {
      setNoOfItems((prev) => prev - 1);
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.getElementsByTagName("html")[0].style.overflow = "unset";
  };

  return (
    <CheckOutCardContainer>
      <CardModal
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isModalOpen}
        data={props.data}
      />
      <CheckOutCardFigure>
        <img src={data.category.image} alt={data.title} />
      </CheckOutCardFigure>
      <CheckOutCardInfoContainer onClick={openModal}>
        <CheckOutCardTitle>{data.title}</CheckOutCardTitle>
        <CheckOutCardPrice>${data.price}</CheckOutCardPrice>
        <CheckOutCardNoOfItemsContainer>
          <CheckOutCardItemsCta onClick={handleDecrese} action="decrease">
            decrease
          </CheckOutCardItemsCta>
          <CheckOutCardNoOfItems>{noOfItems}</CheckOutCardNoOfItems>
          <CheckOutCardItemsCta onClick={handleIncrease} action="increase">
            increase
          </CheckOutCardItemsCta>
        </CheckOutCardNoOfItemsContainer>
      </CheckOutCardInfoContainer>
      <CheckOutCardRemoveWrapper>
        <CheckOutCardItemsCta onClick={handleRemove} action="remove">
          remove
        </CheckOutCardItemsCta>
      </CheckOutCardRemoveWrapper>
    </CheckOutCardContainer>
  );
}
