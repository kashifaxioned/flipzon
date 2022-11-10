import styled from "styled-components";
import bgImage from "../../images/banner_bg.jpg";

const BannerContainer = styled.div`
  padding: 15rem 0;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: bottom 7% center;
  background-repeat: no-repeat;
  transform: translateY(84px)
`;

const BannerTitle = styled.h2`
  width: 60%;
  font-size: 4.5rem;
  font-weight: 500;
  line-height: 1.2;
`;

const BannerInfo = styled.p`
  padding: 2rem 0 3rem;
  font-size: 2rem;
`;

const BannerBadge = styled.span`
  padding: 20px 30px;
  border-radius: 20px;
  background-color: #472d2d;
  color: #f7ecde;
  font-size: 16px;
  font-weight:500;
  text-transform: capitalize;
`;

export { BannerContainer, BannerTitle, BannerInfo, BannerBadge };
