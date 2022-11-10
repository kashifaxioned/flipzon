import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AllProductsTitle } from "../AllProducts/allProducts.styled";
import { Wrapper } from "../wrapper.styled";
import { SignInContainer, SignInForm, StyledLink } from "./signIn.styled";
import { Navigate } from "react-router";
import { addSignInUser } from "../../features/SignIn/signInSlice";

export default function SignIn() {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.users.user);

  const signedInUser = useSelector(state => state.signInUser.user)

  const usernameReg = new RegExp("^[a-z0-9_.]+$");

  const passwordReg = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ele = e.target.children;
    
    const tempObj = {
      username: '',
      password: ''
    }

    if (validate(ele.username.value, usernameReg)) {
      tempObj.username = ele.username.value;
    } else {
      alert("Username is not valid");
      return;
    }

    if (validate(ele.password.value, passwordReg)) {
      tempObj.password = ele.password.value;
    } else {
      alert("Please use special characters in password");
      return;
    }

    let isUsernameFound, isPasswordCorrect;

    user.map(x => {  
      if(x.username === tempObj.username) {
       isUsernameFound = true
      }else {
        alert('Username not found please sign in')
        isUsernameFound = false
      }
      if(x.password === tempObj.password) {
        isPasswordCorrect = true
      }else {
        alert('Password is incorrect')
        isPasswordCorrect = false;
      }
    })

    if(isPasswordCorrect && isUsernameFound) {
      dispatch(addSignInUser(tempObj))
    }

  };

  const validate = (x, reg) => {
    if ((x.length >= 6) & reg.test(x)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SignInContainer>
      {Object.keys(signedInUser).length !== 0 && <Navigate to="/" />}
      {Object.keys(signedInUser).length === 0 && <Navigate to="/logIn" />}
      <Wrapper>
        <AllProductsTitle>Sign In</AllProductsTitle>
        <SignInForm onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <p>
            Don't have an account? <StyledLink to="/logIn">Log In</StyledLink>
          </p>
          <button type="submit">sign in</button>
        </SignInForm>
      </Wrapper>
    </SignInContainer>
  );
}
