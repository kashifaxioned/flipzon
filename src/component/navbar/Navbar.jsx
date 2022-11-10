import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  NavContainer,
  Title,
  SearchForm,
  SearchInp,
  SearchContainer,
  SearchSuggestionBox,
  SearchSuggestions,
  SignIn,
  Cart,
  Category,
  CategoryItem,
  CartValue,
  CartIcon,
  StyledLink,
} from "./navbar.styled";
import { Wrapper } from "../wrapper.styled";
import { useGetAllProductsQuery } from "../../features/api/apiSlice";
import { Link } from "react-router-dom";
import { removeSignInUser } from "../../features/SignIn/signInSlice";
import CardModal from "../CardModal/CardModal";

export default function Navbar() {
  const { data, isSuccess } = useGetAllProductsQuery();

  const noOfItems = useSelector((state) => state.cart.product).length;

  const signedInUser = useSelector((state) => state.signInUser.user);

  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState([]);

  const [isFocus, setFocus] = useState(false);

  const handleFocus = () => setFocus(true);

  const handleBlur = () => setFocus(false);

  const handleLogOut = () => dispatch(removeSignInUser());

  const handleChange = (e) => {
    if (isSuccess) {
      const searchedVal = e.target.value.toUpperCase();
      const searchedArr = data.filter((x) => {
        return x.title.toUpperCase().indexOf(searchedVal) !== -1;
      });
      setSearchData(searchedArr);
    }
  };

  return (
    <NavContainer>
      <Wrapper>
        <Title>
          <StyledLink to="/">FlipZon</StyledLink>
        </Title>
        <Category>
          <CategoryItem>
            <StyledLink to="shoes">shoes</StyledLink>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/furniture">furniture</StyledLink>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="/electronics">electronics</StyledLink>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="clothes">clothes</StyledLink>
          </CategoryItem>
          <CategoryItem>
            <StyledLink to="others">others</StyledLink>
          </CategoryItem>
        </Category>
        <SearchContainer>
          <SearchForm>
            <SearchInp
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              placeholder="Search for products"
            />
          </SearchForm>
          {isFocus && (
            <SearchSuggestionBox>
              {searchData.map((x, i) => {
                return <SearchSuggestions key={i}>{x.title}</SearchSuggestions>;
              })}
            </SearchSuggestionBox>
          )}
        </SearchContainer>
        {Object.keys(signedInUser).length !== 0 ? (
          <SignIn onClick={handleLogOut}>Log Out</SignIn>
        ) : (
          <StyledLink to="/signIn">
            <SignIn>sign in</SignIn>
          </StyledLink>
        )}
        <Link to="checkout">
          <Cart>
            {noOfItems > 0 && <CartValue>{noOfItems}</CartValue>}
            <CartIcon>cart</CartIcon>
          </Cart>
        </Link>
      </Wrapper>
    </NavContainer>
  );
}
