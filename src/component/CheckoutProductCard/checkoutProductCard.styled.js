import styled from "styled-components";

const CheckOutCardContainer = styled.div`
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CheckOutCardFigure = styled.figure`
  flex-basis: 25%;
`;

const CheckOutCardInfoContainer = styled.div`
  flex-basis: 50%;
  cursor: pointer;
`;

const CheckOutCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;

const CheckOutCardPrice = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const CheckOutCardNoOfItemsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CheckOutCardNoOfItems = styled.span`
  font-size: 20px;
`;

const CheckOutCardItemsCta = styled.span`
  padding: 5px 15px;
  border: 1px solid #eee;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  cursor: pointer;
  text-indent: -9999999px;

  width: ${(props) => props.action === "remove" && "30%"};

  &:before {
    float: right;
    text-indent: 0;
    content: ${(props) => props.action === "increase" && "'\\2b'"};
    content: ${(props) => props.action === "decrease" && "'\\f068'"};
    content: ${(props) => props.action === "remove" && "'\\f1f8'"};
    font-family: "FontAwesome";
  }

  &:hover {
    background-color: transparent;
  }
`;

const CheckOutCardRemoveWrapper = styled.div`
  flex-basis: 10%;
`;

export {
  CheckOutCardContainer,
  CheckOutCardFigure,
  CheckOutCardInfoContainer,
  CheckOutCardTitle,
  CheckOutCardPrice,
  CheckOutCardNoOfItemsContainer,
  CheckOutCardNoOfItems,
  CheckOutCardItemsCta,
  CheckOutCardRemoveWrapper,
};
