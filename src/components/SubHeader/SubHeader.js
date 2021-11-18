import "./SubHeader.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ACTIONS from "../../redux/actions";

const SubHeader = () => {
  const { searchInput, sidebarFilters } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleSelect(e) {
    const newFilters = { ...sidebarFilters };
    newFilters.order = e.target.value;

    dispatch({
      type: ACTIONS.SET_SIDEBAR_FILTER,
      payload: newFilters,
    });
  }

  return (
    <div className="subheader">
      <div className="subheader__col1">
        <p className="subheader__col1__p1">{searchInput}</p>
        <p className="subheader__col1__p2">
          Aranan Kelime : <span data-testid="display-input">{searchInput}</span>
        </p>
      </div>
      <div className="subheader__col2">
        <select
          name="cars"
          id="cars"
          placeholder="Sıralama"
          onChange={handleSelect}
          value={sidebarFilters.order}
        >
          <option value="Sıralama" disabled>
            Sıralama
          </option>
          <option value="En Düşük Fiyat">En Düşük Fiyat</option>
          <option value="En Yüksek Fiyat">En Yüksek Fiyat</option>
          <option value="En Yeniler (A&gt;Z)">En Yeniler (A&gt;Z)</option>
          <option value="En Yeniler (Z&gt;A)">En Yeniler (Z&gt;A)</option>
        </select>
      </div>
    </div>
  );
};

export default SubHeader;
