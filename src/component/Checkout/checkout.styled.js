import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckOutContainer = styled.div`
  min-height: 80vh;
  padding: 3rem 0 5rem;
  transform: translateY(84px);
`;

const CheckOutProductWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const OrderSummary = styled.div`
  margin: 5rem 0;
`;

const OrderSummaryTitle = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  text-transform: capitalize;
`;

const OrderSummaryInfo = styled.ul`
  width: 50%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;

  & li {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;

    &:last-child {
      border-top: 1px solid;

      & span {
        font-size: 1.5rem;
      }
    }

    & span {
      text-transform: capitalize;
    }
  }
`;

const CheckOutCta = styled.span`
  width: 50%;
  padding: 10px 20px;
  border: 1px solid #472d2d;
  border-radius: 10px;
  margin: 3rem 0;
  display: block;
  background-color: #472d2d;
  color: #f7ecde;
  cursor: pointer;
  font-size: 1.3rem;
  text-align: center;

  &:hover {
    background-color: transparent;
    color: #472d2d;
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  color: inherit;
`;

const EmptyCartInfo = styled.h3`
  margin-top: 2rem;
  font-size: 3rem;
  text-align: center;
`;

export {
  CheckOutContainer,
  CheckOutProductWrapper,
  OrderSummary,
  OrderSummaryTitle,
  OrderSummaryInfo,
  CheckOutCta,
  StyledLink,
  EmptyCartInfo,
};
