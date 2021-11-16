import { useEffect } from "react";
import ACTIONS from "../../redux/actions";
import Basket from "../Basket/Basket";
import { useSelector, useDispatch } from "react-redux";

import "./Header.css";
const path = `${process.env.PUBLIC_URL}/imgs`;

const Header = () => {
  const searchInput = useSelector((state) => state.searchInput);
  const dispatch = useDispatch();

  function handleInput(e) {
    dispatch({
      type: ACTIONS.SET_SEARCH_INPUT,
      payload: e.target.value,
    });
  }

  return (
    <header className="header">
      <img className="header__logo" src={`${path}/logo.svg`} alt="logo" />
      <div className="header__searchBar">
        <img src={`${path}/searchIcon.svg`} alt="search" />
        <input
          type="text"
          name="searchInput"
          placeholder="25 milyon'dan fazla ürün içerisinde ara"
          value={searchInput}
          onChange={handleInput}
        />
      </div>
      <Basket />
    </header>
  );
};

export default Header;
