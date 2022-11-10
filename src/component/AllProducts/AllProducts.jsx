import React, { useState, lazy, Suspense } from "react";
import {
  AllProductsContainer,
  AllProductsTitle,
  StyledInifinteScroll,
} from "./allProducts.styled";
import { Wrapper } from "../wrapper.styled";
import Spinner from "../Spinner/Spinner";
import { useGetAllProductsQuery } from "../../features/api/apiSlice";

const ProductCard = lazy(() => import("../ProductCard/ProductCard"));

export default function AllProducts(props) {
  let dataArr = [];

  const { data, isLoading, isSuccess } = useGetAllProductsQuery();

  const [offset, setOffset] = useState(8);

  const fetchData = () => {
    setOffset(offset + 8);
  };

  if (isSuccess) {
    data.map((x) => {
      if (props.category) {
        (x.category.name === props.category) && dataArr.push(x);
      } else {
        dataArr.push(x);
      }
    });
  }

  return (
    <AllProductsContainer>
      <Wrapper>
        <AllProductsTitle>{props.category ? props.category : 'All Products'}</AllProductsTitle>
        {isLoading && <Spinner />}

        <StyledInifinteScroll
          dataLength={offset}
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading......</h4>}
          scrollThreshold={0.95}
        >
          {dataArr.slice(0, offset).map((x, i) => {
            return (
              <Suspense
                threshold={0.9}
                key={i}
                fallback={<div>Loading...</div>}
              >
                <ProductCard data={x} key={i} />
              </Suspense>
            );
          })}
        </StyledInifinteScroll>
      </Wrapper>
    </AllProductsContainer>
  );
}
