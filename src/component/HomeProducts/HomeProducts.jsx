import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Wrapper } from "../wrapper.styled";
import {
  HomeProductsContainer,
  HomeProductsTitle,
  HomeProductsWrapper,
  SeeAllCta,
} from "./homeProducts.styled";
import ProductCard from "../ProductCard/ProductCard";
import { useGetAllProductsQuery } from "../../features/api/apiSlice";

export default function HomeProducts() {

  const { data } = useGetAllProductsQuery();

  return (
    <HomeProductsContainer>
      <Wrapper>
        <HomeProductsTitle>Our best products</HomeProductsTitle>
        <HomeProductsWrapper>
          {data &&
            data.slice(0, 8).map((x, i) => {
              return <ProductCard data={x} key={i} />;
            })}
        </HomeProductsWrapper>
        <Link to="/allProducts">
          <SeeAllCta>see all</SeeAllCta>
        </Link>
      </Wrapper>
    </HomeProductsContainer>
  );
}
