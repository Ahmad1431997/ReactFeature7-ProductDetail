import styled, { createGlobalStyle } from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Description = styled.h4`
  text-align: center;
`;

export const DetailWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  /* display: flex; */
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ProductWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const DeleteButtonStyled = styled.button``;

export const NavProduct = styled(NavLink)`
  color: white;
  width: 100px;
  height: 40px;
  margin-top: 15px;
  text-align: center;

  &.active {
    background-color: aqua;
    margin-top: 15px;
  }
`;
export const NavHome = styled(NavLink)`
  color: white;
  width: 100px;
  height: 40px;
  margin-top: 15px;
  text-align: center;
  margin-right: 1000px;
  /* &.active {
    background-color: aqua;
    margin-top: 15px;
  } */
`;
export const NavCont = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
