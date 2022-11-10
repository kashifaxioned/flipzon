import React from 'react'
import {useSelector} from 'react-redux'
import { HomeContainer } from './home.styled'
import Banner from '../Banner/Banner'
import HomeProducts from '../HomeProducts/HomeProducts'

export default function Home() {

  return (
    <HomeContainer>
       <Banner/>
       <HomeProducts/>
    </HomeContainer>
  )
}
