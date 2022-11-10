import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import CardModal from "../CardModal/CardModal";
import {
  ProductCardContainer,
  ProductInfoContainer,
  ProductTitle,
  ProductPrice,
  ProductDelivery,
  ProductCta,
} from "./productCard.styled";

export default function ProductCard(props) {
  const dispatch = useDispatch();

  const [added, setAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(props.data));
    setAdded(true);
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
    <ProductCardContainer>
      <CardModal
        openModal={openModal}
        closeModal={closeModal}
        isOpen={isModalOpen}
        data={props.data}
        addToCart={added}
      />
      <figure>
        <img src={props.data.category.image} alt={props.data.title} />
      </figure>
      <ProductInfoContainer onClick={openModal}>
        <ProductTitle>{props.data.title}</ProductTitle>
        <ProductPrice>${props.data.price}</ProductPrice>
        <ProductDelivery>free delivery</ProductDelivery>
        <ProductCta
          addToCart={added}
          onClick={handleAddToCart}
        >
          {added ? "added!" : "add to cart"}
        </ProductCta>
      </ProductInfoContainer>
    </ProductCardContainer>
  );
}
