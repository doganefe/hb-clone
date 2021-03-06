import ACTIONS from "./actions";
import { products } from "../fakeData";

const basketItemsLocal = JSON.parse(localStorage.getItem("basketItems"));
const productsLocal = JSON.parse(localStorage.getItem("products"));
if (!productsLocal) {
  localStorage.setItem("products", JSON.stringify(products));
}

const initialState = {
  products: productsLocal || products,
  basketItems: basketItemsLocal || [],
  isModalOpen: false,
  searchInput: "",
  sidebarFilters: {
    color: "",
    order: "Sıralama",
    brand: "",
  },
  currentPage: 1,
  productPerPage: 12,
  dialog: {
    description: "foo bar",
    confirm: () => {},
    reject: () => {},
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM_TO_BASKET:
      localStorage.setItem(
        "basketItems",
        JSON.stringify([...state.basketItems, action.payload])
      );
      return {
        ...state,
        basketItems: [...state.basketItems, action.payload],
      };
    case ACTIONS.REMOVE_ITEM_FROM_BASKET:
      const tmpList = [...state.basketItems].filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("basketItems", JSON.stringify(tmpList));
      return {
        ...state,
        basketItems: tmpList,
      };
    case ACTIONS.SET_DIALOG:
      return {
        ...state,
        isModalOpen: action.payload.isModalOpen,
        dialog: action.payload.dialog,
      };
    case ACTIONS.SET_ALLPRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };
    case ACTIONS.SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };
    case ACTIONS.SET_SIDEBAR_FILTER:
      return {
        ...state,
        sidebarFilters: action.payload,
      };
    case ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
