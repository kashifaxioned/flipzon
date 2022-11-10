import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

const AllProductsContainer = styled.div`
  min-height: 80vh;
  padding: 3rem 0 6rem;
  transform: translateY(70px)
`;

const AllProductsTitle = styled.h3`
  font-size: 3rem;
  font-weight: 500;
`;

const AllProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledInifinteScroll = styled(InfiniteScroll)`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export { AllProductsContainer, AllProductsTitle, AllProductsWrapper, StyledInifinteScroll };
