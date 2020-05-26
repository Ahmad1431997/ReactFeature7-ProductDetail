import styled, { createGlobalStyle } from "styled-components";

const CookieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${props => props.theme.pink};
    }

    &.cookie-delete {
      color: ${props => props.theme.red};
    }
  }
`;

const DeleteButton = styled.p`
  color: ${props => props.theme.red};

  &.detail {
    vertical-align: middle;
  }
`;

const Description = styled.h4`
  text-align: center;
`;

const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor}
  }
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export {
  CookieWrapper,
  DeleteButton,
  Description,
  DetailWrapper,
  GlobalStyle,
  ListWrapper,
  Title,
  ShopImage,
  ThemeButton
};
