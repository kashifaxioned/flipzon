import React from "react";
import {
  BannerContainer,
  BannerTitle,
  BannerInfo,
  BannerBadge,
} from "./banner.styled";
import { Wrapper } from "../wrapper.styled";

export default function Banner() {
  return (
    <BannerContainer>
      <Wrapper>
        <BannerTitle>Get the best offers on biggest brands</BannerTitle>
        <BannerInfo>
          Come on, Grab your deals before the offer closed
        </BannerInfo>
        <BannerBadge>browse now</BannerBadge>
      </Wrapper>
    </BannerContainer>
  );
}
