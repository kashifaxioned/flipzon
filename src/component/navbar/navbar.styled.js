import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const dropIn = keyframes`
0% {
  transform: rotateX(-90deg)
}
70% {
  transform: rotateX(20deg) 
}
100% {
  transform: rotateX(0deg) 
}
`;

const NavContainer = styled.div`
  padding: 18px 0;
  background-color: #472d2d;
  color: #f7ecde;
  position:fixed;
  right: 0;
  left:0;
  z-index: 2;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  cursor: pointer;
`;

const Category = styled.ul`
  flex-basis: 35%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
`;

const CategoryItem = styled.li`
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

const SearchContainer = styled.div`
  flex-basis: 30%;
  position: relative;
`;

const SearchForm = styled.form`
  padding: 0 20px;
  display: flex;
  align-items: center;
  background-color: #fff;

  &:after {
    content: "\\f002";
    font-family: "FontAwesome";
    font-size: 20px;
    font-weight: 100;
    color: #7e7975;
  }
`;

const SearchInp = styled.input`
  width: 90%;
  padding: 10px;
  border: none;
  color: #472d2d;
  font-family: inherit;
  font-size: 16px;
  outline: none;
`;

const SearchSuggestionBox = styled.ul`
  max-height: 30vh;
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: #f7ecde;
  color: #472d2d;
  overflow:scroll;
  overflow-x: hidden;
  animation: ${dropIn} 0.7s linear;
  transform-origin: top center;
`;

const SearchSuggestions = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: 0.3s ease-in;

  &:not(:last-child) {
    border-bottom: 1px solid #472d2d;
  }

  &:hover {
    font-size: 18px;
  }
`;

const SignIn = styled.span`
  display: block;
  cursor: pointer;
  font-size: 16px;
  text-transform: capitalize;
`;

const Cart = styled.div``;

const CartIcon = styled.span`
  display: block;
  color: #f7ecde;
  cursor: pointer;
  text-indent: -999999px;

  &:before {
    content: "\\f07a";
    float: right;
    font-family: "FontAwesome";
    font-size: 20px;
    color: inherit;
    text-indent: 0;
    vertical-align: middle;
  }
`;

const CartValue = styled.span`
  padding: 4px 10px;
  border-radius: 50%;
  position: absolute;
  top: 15px;
  right: 9.4%;
  background-color: #e8d91a;
  color: #472d2d;
  font-size: 12px;
  font-weight: 500;
`;

const StyledLink = styled(Link)`
  color: #f7ecde;
`;

export {
  NavContainer,
  Title,
  SearchContainer,
  SearchForm,
  SearchInp,
  Cart,
  SignIn,
  Category,
  CategoryItem,
  CartValue,
  CartIcon,
  StyledLink,
  SearchSuggestionBox,
  SearchSuggestions,
};
