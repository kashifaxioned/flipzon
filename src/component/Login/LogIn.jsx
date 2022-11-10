import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProductsTitle } from "../AllProducts/allProducts.styled";
import { Wrapper } from "../wrapper.styled";
import { SignInContainer, SignInForm } from "../SignIn/signIn.styled";
import { addUser } from "../../features/loginSlce/loginSlice";
import { Navigate } from "react-router";
import { addSignInUser } from "../../features/SignIn/signInSlice";

export default function LogIn() {
  const user = useSelector((state) => state.users.user);

  const dispatch = useDispatch();

  const nameReg = new RegExp("^[A-Za-z]+$");

  const usernameReg = new RegExp("^[a-z0-9_.]+$");

  const passwordReg = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ele = e.target.children;

    const tempObj = {
      profileName: "",
      username: "",
      password: "",
    };

    if (validate(ele.profileName.value, nameReg)) {
      tempObj.profileName = ele.profileName.value;
    } else {
      alert("Profile name is not valid");
      return;
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
    dispatch(addUser(tempObj));
    dispatch(addSignInUser({username: tempObj.username, password: tempObj.password}))
    e.target.reset();
  };

  const validate = (x, reg) => {
    console.log(x.length);
    if ((x.length >= 6) & reg.test(x)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <SignInContainer>
      {user.length !== 0 && <Navigate to="/" />}
      <Wrapper>
        <AllProductsTitle>Log In</AllProductsTitle>
        <SignInForm onSubmit={handleSubmit}>
          <input type="text" name="profileName" placeholder="Name" />
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </SignInForm>
      </Wrapper>
    </SignInContainer>
  );
}
