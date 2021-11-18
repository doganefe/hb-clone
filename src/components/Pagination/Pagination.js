import React from "react";
import ACTIONS from "../../redux/actions";
import "./Pagination.css";
import { useSelector, useDispatch } from "react-redux";

const Pagination = () => {
  const { productPerPage, currentPage, products } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const pageNumbers = [
    ...Array(Math.ceil(products.length / productPerPage)).keys(),
  ];

  function selectCurrentPage(num) {
    dispatch({
      type: ACTIONS.SET_CURRENT_PAGE,
      payload: num,
    });
  }

  return (
    <div className="pagination" data-testid="pagination-test">
      {pageNumbers.map((num) => {
        return (
          <p
            key={num + 1}
            onClick={() => selectCurrentPage(num + 1)}
            className={currentPage === num + 1 ? "selected" : ""}
            data-testid={`pagination-num-test-${num + 1}`}
          >
            {num + 1}
          </p>
        );
      })}
    </div>
  );
};

export default Pagination;
