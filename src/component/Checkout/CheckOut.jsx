import React from "react";
import { useSelector } from "react-redux";
import CheckOutProductCard from "../CheckoutProductCard/CheckoutProductCard";
import {
  CheckOutContainer,
  CheckOutProductWrapper,
  OrderSummary,
  OrderSummaryTitle,
  OrderSummaryInfo,
  CheckOutCta,
  StyledLink,
  EmptyCartInfo,
} from "./checkout.styled";
import { Wrapper } from "../wrapper.styled";
import { AllProductsTitle } from "../AllProducts/allProducts.styled";

export default function CheckOut() {
  const state = useSelector((state) => state.cart.product);

  let cartPrice = 0;

  state.map((x) => (cartPrice += x.price));

  return (
    <CheckOutContainer>
      <Wrapper>
        {state.length === 0 ? (
          <>
            <EmptyCartInfo>Cart is Empty</EmptyCartInfo>
          </>
        ) : (
          <>
            <AllProductsTitle>Items to buy</AllProductsTitle>
            <CheckOutProductWrapper>
              {state.map((x, i) => {
                return <CheckOutProductCard data={x} key={i} />;
              })}
            </CheckOutProductWrapper>
            <OrderSummary>
              <OrderSummaryTitle>order summary</OrderSummaryTitle>
              <OrderSummaryInfo>
                <li>
                  <span>price</span>
                  <span>${cartPrice}</span>
                </li>
                <li>
                  <span>delivery charges</span>
                  <span>free</span>
                </li>
                <li>
                  <span>total</span>
                  <span>${cartPrice}</span>
                </li>
              </OrderSummaryInfo>
            </OrderSummary>
            <CheckOutCta>
              <StyledLink to="/success">Checkout | ${cartPrice}</StyledLink>
            </CheckOutCta>
          </>
        )}
      </Wrapper>
    </CheckOutContainer>
  );
}
