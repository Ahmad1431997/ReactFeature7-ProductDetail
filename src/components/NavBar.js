import { Link } from "react-router-dom";
import { NavProduct, ThemeButton, NavHome, NavCont } from "../styles";

const NavBar = (props) => {
  return (
    <NavCont className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavHome to="/" className="nav-link">
            <img
              src={
                props.currentTheme === "light"
                  ? "https://previews.123rf.com/images/jumpingxiii/jumpingxiii1810/jumpingxiii181000026/109854652-cookie-cartoon-vector-logo-design-.jpg"
                  : "https://media.istockphoto.com/vectors/cookies-icon-vector-id849863918?b=1&k=6&m=849863918&s=612x612&w=0&h=TujTOeDd_foQcsOoMeYxhookWe3JQ_ejTr96T3itCB4="
              }
              width="100px"
              height="40px"
            />
          </NavHome>
        </li>
        <li className="nav-item">
          <NavProduct to="/productlist" className="nav-link">
            Product
          </NavProduct>
        </li>
        <ThemeButton onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </ul>
    </NavCont>
  );
};

export default NavBar;
