import React from 'react'
import { Wrapper } from '../wrapper.styled'
import { BookedContainer } from './booked.styled'
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export default function Booked() {
  const isLogIn = useSelector((state) => state.checkLogin.isLoggedIn);

  return (
    <BookedContainer>
      {!isLogIn && <Navigate to='/signIn'/>}
      <Wrapper>
        <h3>Success</h3>
        <p>Yay!! You'r order is booked it will be delivered soon</p>
      </Wrapper>
    </BookedContainer>
  )
}
