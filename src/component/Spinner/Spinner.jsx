import React from 'react'
import {SpinnerContainer, SpinLoader} from './spinner.styled'

export default function Spinner() {
  return (
    <SpinnerContainer>
      <SpinLoader>0</SpinLoader>
    </SpinnerContainer>
  )
}
