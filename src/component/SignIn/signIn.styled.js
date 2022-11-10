import { Link } from "react-router-dom";
import styled from "styled-components";

const SignInContainer = styled.div`
  padding: 8rem 0 5rem;

  & > div {
    width: 50%;
    text-align: center;
  }
`;

const SignInForm = styled.form`
  width: 50%;
  padding: 4rem 2rem;
  border: 1px solid;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & input {
    padding: 10px;
    border: none;
    border-bottom: 1px solid #472d2d;
    color: inherit;
    font-family: inherit;
    font-size: 1.2rem;
    outline: none;
  }

  & button {
    padding: 10px 25px;
    border: 1px solid #472d2d;
    border-radius: 20px;
    margin-top: 3rem;
    display: inline-block;
    background-color: #472d2d;
    color: #f7ecde;
    cursor: pointer;
    font-size: 1.2rem;
    text-align: center;
    text-transform: capitalize;
    transition: content 1s ease-in;

    &:hover {
      background-color: transparent;
      color: #472d2d;
    }
  }

  & p { margin-top: 1rem }
`;

const StyledLink = styled(Link)`
  padding-bottom: 1px;
  border-bottom: 1px solid #472d2d;
  color: inherit;
`;

export { SignInContainer, SignInForm, StyledLink };
