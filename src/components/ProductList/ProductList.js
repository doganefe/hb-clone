import { products } from "../../fakeData";
import Product from "../Product/Product";
import { useSelector } from "react-redux";
import "./ProductList.css";

function calcDiscountedPrice(price, discoundPercentage) {
  return (price - (price * discoundPercentage) / 100).toFixed(2);
}

const ProductList = () => {
  const {
    basketItems,
    searchInput,
    sidebarFilters,
    currentPage,
    productPerPage,
  } = useSelector((state) => state);
  let productsTmp = [...products];

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  let currentProducts = productsTmp.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //searchbar filter
  if (searchInput.length >= 2) {
    currentProducts = currentProducts.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  //sidebar filters
  if (sidebarFilters.color) {
    currentProducts = currentProducts.filter(
      (product) => sidebarFilters.color === product.color
    );
  }
  if (sidebarFilters.brand) {
    currentProducts = currentProducts.filter(
      (product) => sidebarFilters.brand === product.brand
    );
  }

  switch (sidebarFilters.order) {
    case "En Düşük Fiyat":
      currentProducts
        .sort(function (a, b) {
          return (
            calcDiscountedPrice(b.price, b.discoundPercentage) -
            calcDiscountedPrice(a.price, a.discoundPercentage)
          );
        })
        .reverse();
      break;
    case "En Yüksek Fiyat":
      currentProducts.sort(function (a, b) {
        return (
          calcDiscountedPrice(b.price, b.discoundPercentage) -
          calcDiscountedPrice(a.price, a.discoundPercentage)
        );
      });

      break;
    case "En Yeniler (A>Z)":
      currentProducts.sort(function (a, b) {
        return new Date(b.createdDate) - new Date(a.createdDate);
      });
      break;
    case "En Yeniler (Z>A)":
      currentProducts
        .sort(function (a, b) {
          return new Date(b.createdDate) - new Date(a.createdDate);
        })
        .reverse();
      break;

    default:
      break;
  }

  return (
    <div className="products">
      <div className="products__productlist">
        {currentProducts.map((product, i) => {
          let isPurchasable =
            basketItems && basketItems.some((item) => item.id === product.id);
          return (
            <Product key={i} product={product} purchasable={!isPurchasable} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
